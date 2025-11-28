
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
                from: "GameZone <onboarding@resend.dev>", // Default Resend sender
                to: [email],
                subject: "Welcome to GameZone!",
                html: `
          <h1>Welcome to GameZone!</h1>
          <p>Thanks for subscribing to our newsletter.</p>
          <p>You'll now receive the latest game reviews, exclusive bonuses, and news directly to your inbox.</p>
          <br/>
          <p>Happy Gaming,</p>
          <p>The GameZone Team</p>
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
