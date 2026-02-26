# Sanity CMS Guide for SwiftDrip

This guide explains how to use Sanity to manage content on the SwiftDrip website. No coding knowledge required.

---

## What is Sanity?

Sanity is the content management system (CMS) behind this website. Think of it like a dashboard where you can edit services, team members, testimonials, and site settings — and those changes automatically show up on the live website.

---

## First-Time Setup

### 1. Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/) and sign up (free tier works)
2. Create a new project — name it "SwiftDrip"
3. Choose the **"Production"** dataset when prompted
4. After creating the project, go to [sanity.io/manage](https://www.sanity.io/manage)
5. Click your project and find your **Project ID** (looks like `abc123de`)

### 2. Configure the Environment

1. In the project folder, copy the example environment file:
   ```
   cp .env.example .env.local
   ```
2. Open `.env.local` and replace `your-project-id` with your actual Sanity Project ID:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123de
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

### 3. Add CORS Origins in Sanity

For the Studio to work, Sanity needs to know which URLs are allowed to connect:

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**
2. Add these origins:
   - `http://localhost:3000` (for local development)
   - Your production URL (e.g., `https://swiftdripwellness.com`)
3. Check **"Allow credentials"** for each

### 4. Start the Website

```
npm run dev
```

The website runs at `http://localhost:3000` and the Sanity Studio (your editing dashboard) is at `http://localhost:3000/studio`.

---

## Accessing the Studio (Your Editing Dashboard)

The Studio is built right into the website. To access it:

- **Local**: Go to `http://localhost:3000/studio`
- **Live site**: Go to `https://yoursite.com/studio`

You'll be asked to sign in with the same account you used at sanity.io.

---

## What You Can Edit

When you open the Studio, you'll see a sidebar on the left with these content types:

### Services

These are the IV drips, lab tests, and rapid tests shown on the website.

**To add a new service:**
1. Click **"Service"** in the sidebar
2. Click the **"+"** button (or the pencil icon to create new)
3. Fill in the fields:
   - **Name**: The service name (e.g., "Immunity Boost IV")
   - **Slug**: Click "Generate" — this creates the URL-friendly version automatically
   - **Category**: Select "IV Drip", "Lab Test", or "Rapid Test"
   - **Description**: Full description of the service
   - **Short Description**: A one-liner for cards/previews
   - **Image**: Upload a photo (click the image area to upload)
   - **Price**: e.g., "$199" or "Starting at $149"
   - **Duration**: e.g., "45-60 minutes"
   - **Benefits**: Click "Add item" for each benefit bullet point
   - **Mobile Service**: Toggle on if you offer this as a house-call service
   - **Featured**: Toggle on to highlight this service on the homepage
   - **Display Order**: A number (1, 2, 3...) to control the order services appear
4. Click **"Publish"** (green button, bottom right)

**To edit a service:**
1. Click **"Service"** in the sidebar
2. Click the service you want to edit
3. Make your changes
4. Click **"Publish"**

**To delete a service:**
1. Open the service
2. Click the **"..."** menu (top right) → **"Delete"**

### Lab Panels

These are the lab testing packages.

**Fields:**
- **Name**: Panel name (e.g., "Comprehensive Metabolic Panel")
- **Slug**: Click "Generate"
- **Description**: What the panel tests for
- **Tests Included**: Click "Add item" for each individual test in the panel
- **Price**: e.g., "$89"
- **Turnaround Time**: e.g., "2-3 business days"
- **Image**: Optional photo
- **Featured**: Toggle on for homepage display
- **Display Order**: Number to control ordering

### Team Members

Staff profiles shown on the About page.

**Fields:**
- **Name**: Full name
- **Role**: e.g., "Medical Director", "Nurse Practitioner"
- **Bio**: A paragraph about them
- **Image**: Professional headshot (upload by clicking the image area)
- **Credentials**: Click "Add item" for each credential (e.g., "MD", "NP-C", "Board Certified")
- **Display Order**: Number to control the order they appear

### Testimonials

Customer reviews displayed on the website.

**Fields:**
- **Name**: Customer's name
- **Text**: Their review/testimonial
- **Rating**: Number from 1 to 5 (5 = best)

### Site Settings

Global settings for the entire website. There should only be **one** Site Settings document.

**Fields:**
- **Site Title**: "SwiftDrip Comprehensive Wellness"
- **Tagline**: "Recharge. Recover. Rejuvenate."
- **Site Description**: Short description for search engines
- **Logo**: Upload the site logo
- **Phone Number**: Business phone
- **Email**: Business email
- **Address**: Street, City, State, ZIP
- **Social Links**: Instagram and Facebook URLs
- **Booking URL**: Link to Vagaro booking page

### Pages

Generic content pages (e.g., About, FAQ). These use a rich text editor.

**Fields:**
- **Title**: Page title
- **Slug**: Click "Generate"
- **Hero Title / Hero Subtitle**: Large heading text at the top of the page
- **Content**: Rich text editor — you can format text, add links, bold, italics, etc.
- **SEO Title / SEO Description**: For search engine optimization (what shows up in Google)

---

## Common Tasks

### Changing a service price
1. Go to Studio → **Service** → click the service
2. Update the **Price** field
3. Click **Publish**

### Adding a new team member
1. Go to Studio → **Team Member** → click **"+"**
2. Fill in name, role, bio, upload photo, add credentials
3. Set **Display Order** (e.g., 1 for first, 2 for second)
4. Click **Publish**

### Updating contact info
1. Go to Studio → **Site Settings** → click the settings document
2. Update phone, email, address, or social links
3. Click **Publish**

### Reordering items
Each content type has a **Display Order** field. Lower numbers appear first:
- Set to `1` to appear first
- Set to `2` to appear second
- And so on...

### Uploading images
1. Click the image field area in any document
2. Select a file from your computer, or drag and drop
3. After uploading, you can set a **hotspot** (the focal point for cropping) by clicking the image and dragging the circle

---

## Important Notes

- **Publish vs. Draft**: Changes are saved as drafts automatically. They only go live when you click **"Publish"**. You can safely make edits without affecting the live site until you publish.
- **The website currently uses hardcoded data**: The Sanity schemas and Studio are set up and ready, but the website pages currently display data from a constants file (`src/lib/constants.ts`). To have the website pull content from Sanity instead, a developer needs to connect the page components to the Sanity queries (already written in `src/sanity/queries.ts`).
- **Images**: Sanity hosts all uploaded images on their CDN — they load fast worldwide.
- **Free tier limits**: The free Sanity plan includes 100K API requests/month and 10GB bandwidth, which is plenty for a small business site.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Studio shows a blank page | Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local` and restart the dev server |
| "CORS origin not allowed" error | Add your URL to CORS origins at [sanity.io/manage](https://www.sanity.io/manage) → API → CORS origins |
| Changes not showing on the site | Make sure you clicked **Publish** (not just saved as draft). Also note the "hardcoded data" note above |
| Can't log into Studio | Make sure you're using the same account that owns the Sanity project, or that you've been invited as a team member |
| Images not loading | Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct in `.env.local` |

---

## Sanity Dashboard

You can also manage your project settings, invite team members, and monitor usage at:
**[sanity.io/manage](https://www.sanity.io/manage)**

To invite someone to edit content:
1. Go to sanity.io/manage → your project → **Members**
2. Click **"Invite member"**
3. Enter their email — they'll get an invitation to join
