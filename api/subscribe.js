export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = request.body;

    if (!email) {
        return response.status(400).json({ error: 'Email is required' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
        return response.status(500).json({ error: 'Server configuration error: Missing API Key' });
    }

    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'GameFlex <onboarding@resend.dev>', // Or 'newsletter@gameflexhub.com' if verified
                to: [email],
                subject: 'Welcome to GameFlex | Your Ultimate Gaming Destination',
                html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to GameFlex</title>
            </head>
            <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; color: #e2e8f0; margin: 0; padding: 0;">
                <center style="width: 100%; background-color: #0f172a; padding: 40px 0;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); text-align: left;">
                        
                        <!-- Header with Logo -->
                        <div style="background-color: #0f172a; padding: 30px; text-align: center; border-bottom: 1px solid #334155;">
                            <!-- REPLACE WITH YOUR ACTUAL LOGO URL -->
                            <img src="https://placehold.co/200x60/0f172a/00ff9d?text=GameFlex&font=montserrat" alt="GameFlex Logo" style="max-width: 200px; height: auto; border: none; display: block; margin: 0 auto;">
                        </div>

                        <!-- Content -->
                        <div style="padding: 40px 30px;">
                            <h2 style="color: #f8fafc; margin-top: 0; font-size: 24px; font-weight: 600;">Welcome to the Future of Gaming.</h2>
                            
                            <p style="color: #cbd5e1; line-height: 1.6; font-size: 16px; margin-bottom: 24px;">
                                Thank you for subscribing to the <strong>GameFlex</strong> newsletter. We are thrilled to have you join our community of dedicated gamers and industry enthusiasts.
                            </p>
                            
                            <p style="color: #cbd5e1; line-height: 1.6; font-size: 16px; margin-bottom: 24px;">
                                Our mission is to provide you with high-quality, curated content that enhances your gaming experience. Here is what you can expect from us:
                            </p>

                            <ul style="color: #cbd5e1; line-height: 1.6; font-size: 16px; padding-left: 20px; margin-bottom: 32px;">
                                <li style="margin-bottom: 12px;"><strong>Exclusive Reviews:</strong> In-depth analysis of the latest mobile and PC titles.</li>
                                <li style="margin-bottom: 12px;"><strong>Strategic Insights:</strong> Professional guides to help you master your favorite games.</li>
                                <li style="margin-bottom: 12px;"><strong>Industry Updates:</strong> Breaking news and trends from the gaming world.</li>
                            </ul>

                            <div style="text-align: center; margin: 40px 0;">
                                <a href="https://gameflexhub.com" style="background-color: #00ff9d; color: #000000; padding: 16px 36px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; display: inline-block; transition: background-color 0.2s;">
                                    Visit GameFlex Hub
                                </a>
                            </div>

                            <p style="color: #94a3b8; font-size: 14px; margin-top: 40px; border-top: 1px solid #334155; padding-top: 24px; line-height: 1.5;">
                                We are committed to delivering value to your inbox. If you have any feedback or specific topics you'd like us to cover, feel free to reply to this email.
                                <br><br>
                                Sincerely,<br>
                                <strong>The GameFlex Team</strong>
                            </p>
                        </div>

                        <!-- Footer -->
                        <div style="background-color: #0f172a; padding: 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #334155;">
                            <p style="margin: 0 0 8px 0;">&copy; ${new Date().getFullYear()} GameFlex. All rights reserved.</p>
                            <p style="margin: 0;">You are receiving this email because you subscribed to our newsletter.</p>
                        </div>
                    </div>
                </center>
            </body>
            </html>
        `,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return response.status(400).json({ error: errorData });
        }

        const data = await res.json();
        return response.status(200).json(data);

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}
