# Deployment Guide for Vercel

This project is optimized for deployment on [Vercel](https://vercel.com).

## Prerequisites

1.  **GitHub Repository**: Ensure your code is pushed to GitHub.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com/signup).

## Step-by-Step Deployment

1.  **Push to GitHub**:
    Make sure all your latest changes (including `sitemap.ts`, `robots.ts`, and `middleware.ts`) are committed and pushed.
    ```bash
    git add .
    git commit -m "Prepare for deployment: Add sitemap, robots, and middleware"
    git push origin main
    ```

2.  **Import into Vercel**:
    - Go to your Vercel Dashboard.
    - Click **"Add New..."** -> **"Project"**.
    - Import your `bento-portfolio` repository.

3.  **Configure Project**:
    - **Framework Preset**: Next.js (should be detected automatically).
    - **Root Directory**: `./` (default).

4.  **Environment Variables**:
    You need to set the following environment variables in the Vercel dashboard under **Settings > Environment Variables**.

    | Variable | Description |
    | :--- | :--- |
    | `NEXT_PUBLIC_BASE_URL` | The domain of your deployed site (e.g., `https://your-portfolio.vercel.app`). You can set this after the first deployment once you have the URL. |



## Verifying Deployment

- Visit your Vercel URL.
- Check `/sitemap.xml` and `/robots.txt` to ensure they are generated correctly.
- Test the rate limiting by refreshing the contact API endpoint (if applicable) or checking the logs.
