# Portfolio Update Plan

## Goal
Convert the portfolio to a "Retro Mac" themed showcase for **Vijay E**, highlighting his Full Stack & Competitive Programming achievements.

## Content Mapping (from Resume)
- **Profile**: Vijay E, B.E. CSE (AI & ML) student.
- **Experience**: Intern at LearnLogicify Technologies.
- **Projects**:
    - Alumni Connection Platform (Next.js, TS, MongoDB).
    - Expense Tracker (Java Swing).
- **Competitive Programming**:
    - Leetcode: Knight (1863 rating).
    - Codeforces: Expert (1679 rating).
    - Codechef: 3 Star (1711 rating).
- **Skills**: Python, Java, TypeScript, Next.js, Tailwind, MongoDB, MySQL.

## Proposed Changes

### 1. Data Layer
#### [NEW] `lib/data.ts`
- Store all resume data (Experience, Education, Projects, Skills, CP Stats) in a structured JSON/Object format to keep components clean.

### 2. New Components
#### [NEW] `components/CPStats.tsx`
- **Unique Feature**: Display Competitive Programming stats (Leetcode, Codeforces) in a "System Monitor" or "Graph" style window.

#### [NEW] `components/ExperienceItem.tsx`
- A Mac-style file/folder view to display the LearnLogicify internship.

#### [NEW] `components/SkillsList.tsx`
- Interactive list needed for highlighting the skills.

### 3. Page Updates
#### [MODIFY] `app/page.tsx`
- **Hero**: "Hello, I'm Vijay."
- **Layout**: Transform the landing page into a "Mac Desktop" view.
    - Background: Classic Mac OS pattern.
    - Floating Icons: Resume, Projects, Contact.
    
*(Refinement)*: Staying precise to the user's request to "keep the current theme", I will stick to the **existing** scroll-based layout but inject the new sections as "Sections" rather than changing it to a full 100vh OS simulator unless requested. The current theme is a "Long scroll page with Mac styling".

**Revised Page Structure (`app/page.tsx`):**
1.  **Hero**: Existing Mac Intro.
2.  **About**: Short bio (from Resume header).
3.  **Competitive Programming** (New Section): Highlighting the "Expert" and "Knight" ranks.
4.  **Projects**: Replace placeholders with Alumni Platform & Expense Tracker.
5.  **Experience**: LearnLogicify Internship details.
6.  **Skills**: Technical Skills list.
7.  **Education**: KIT details.

### 4. Styling
- Use `framer-motion` to animate sections as they scroll into view (slide-up, fade-in).

## Verification Plan
### Manual Verification
- **Content Accuracy**: exact match with `resume.txt`.
- **Links**: Test GitHub and LinkedIn links.
- **Responsiveness**: Check mobile view for the CP Stats table/cards.
