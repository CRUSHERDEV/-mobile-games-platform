
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");

if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
}

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const { email } = await req.json();

        if (!email) {
            return new Response(
                JSON.stringify({ error: "Email is required" }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
            );
        }

        // 1. Insert into Database (if not already done by frontend, but let's do it here for security/atomicity)
        // Actually, to keep it simple with the current flow, we can assume the frontend inserts it, 
        // OR we can do it here. Doing it here is better.
        // We need the Service Role key to bypass RLS if we wanted to, but Anon key is fine if RLS allows insert.
        // However, we don't have the supabase client initialized here yet.
        // Let's just focus on sending the email for now, assuming the frontend inserts it? 
        // No, the user wants "subscribe" action.

        // Let's use fetch to call Resend
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "GameFlex <onboarding@resend.dev>",
                to: [email],
                subject: "Welcome to the Squad! 🎮 | GameFlex",
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; color: #e2e8f0; padding: 40px 20px;">
                        <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                            
                            <!-- Header -->
                            <div style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 30px 0; text-align: center;">
                                <h1 style="color: #ffffff; margin: 0; font-size: 28px; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">GameFlex</h1>
                            </div>

                            <!-- Content -->
                            <div style="padding: 40px 30px;">
                                <h2 style="color: #f8fafc; margin-top: 0; font-size: 24px;">Welcome to the Inner Circle! 🚀</h2>
                                
                                <p style="color: #cbd5e1; line-height: 1.6; font-size: 16px;">
                                    Hey there,
                                </p>
                                
                                <p style="color: #cbd5e1; line-height: 1.6; font-size: 16px;">
                                    Thanks for joining the <strong>GameFlex</strong> community! You've officially leveled up your inbox. We're stoked to have you on board.
                                </p>

                                <p style="color: #cbd5e1; line-height: 1.6; font-size: 16px;">
                                    Get ready for:
                                </p>

                                <ul style="color: #cbd5e1; line-height: 1.6; font-size: 16px; padding-left: 20px;">
                                    <li style="margin-bottom: 10px;">🔥 <strong>Exclusive Reviews</strong> on the hottest new drops.</li>
                                    <li style="margin-bottom: 10px;">💎 <strong>Hidden PC & Client Games</strong> you usually miss.</li>
                                    <li style="margin-bottom: 10px;">📈 <strong>Pro Strategies</strong> to dominate the leaderboards.</li>
                                </ul>

                                <div style="text-align: center; margin: 35px 0;">
                                    <a href="https://gameflexhub.com" style="background-color: #10b981; color: #000000; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; transition: all 0.2s;">
                                        Explore GameFlex Hub
                                    </a>
                                </div>

                                <p style="color: #94a3b8; font-size: 14px; margin-top: 30px; border-top: 1px solid #334155; padding-top: 20px;">
                                    Stay frosty,<br/>
                                    <strong>The GameFlex Team</strong>
                                </p>
                            </div>

                            <!-- Footer -->
                            <div style="background-color: #0f172a; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
                                <p style="margin: 0;">&copy; ${new Date().getFullYear()} GameFlex Hub. All rights reserved.</p>
                                <p style="margin: 5px 0 0;">You received this because you subscribed on our website.</p>
                            </div>
                        </div>
                    </div>
                `,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            return new Response(
                JSON.stringify({ error: data }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
            );
        }

        return new Response(
            JSON.stringify(data),
            { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
        );
    }
});
