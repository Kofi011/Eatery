# Food Delivery App Design System Documentation

## Table of Contents
1. [Overview](#overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Grid](#spacing--grid)
5. [Component Library](#component-library)
6. [Visual Elements](#visual-elements)
7. [Animations & Interactions](#animations--interactions)
8. [Layout Patterns](#layout-patterns)
9. [Implementation Guidelines](#implementation-guidelines)

---

## Overview

This design system creates a modern, appetizing, and user-friendly food delivery application. The system balances warmth and appetite appeal with clean digital functionality, prioritizing conversion optimization and delightful user experiences.

### Design Principles
- **Appetite-First**: Every visual decision should enhance food appeal
- **Conversion-Focused**: Clear paths to ordering with minimal friction  
- **Touch-Friendly**: All interactive elements optimized for mobile use
- **Accessible**: WCAG AA compliant with high contrast ratios
- **Performant**: Lightweight components that load quickly

---

## Color System

### Primary Palette

| Role | Color Name | Hex Code | RGB | Usage |
|------|------------|----------|-----|-------|
| Primary | Rich Tomato Red | `#D6453F` | `rgb(214, 69, 63)` | CTAs, primary buttons, active states |
| Secondary | Fresh Basil Green | `#3E7C59` | `rgb(62, 124, 89)` | Success states, secondary actions, category tags |
| Background | Soft White | `#FAFAF8` | `rgb(250, 250, 248)` | Page backgrounds, card backgrounds |
| Text Primary | Slate Gray | `#333333` | `rgb(51, 51, 51)` | Headings, primary text content |
| Accent | Warm Yellow | `#F6C447` | `rgb(246, 196, 71)` | Deal badges, promotional elements |
| Interactive | Cool Mint | `#B3E9D3` | `rgb(179, 233, 211)` | Hover states, progress indicators |

### Extended Palette

| Role | Color Name | Hex Code | RGB | Usage |
|------|------------|----------|-----|-------|
| Text Secondary | Medium Gray | `#666666` | `rgb(102, 102, 102)` | Secondary text, descriptions |
| Text Tertiary | Light Gray | `#999999` | `rgb(153, 153, 153)` | Placeholder text, inactive states |
| Border | Whisper Gray | `#E5E5E5` | `rgb(229, 229, 229)` | Dividers, card borders |
| Error | Spicy Red | `#E74C3C` | `rgb(231, 76, 60)` | Error states, validation messages |
| Warning | Saffron Orange | `#F39C12` | `rgb(243, 156, 18)` | Warning states, caution indicators |
| Success Alt | Deep Green | `#27AE60` | `rgb(39, 174, 96)` | Success confirmations, positive feedback |

### Color Usage Rules

#### ✅ DO's
- Use Rich Tomato Red (#D6453F) for all primary CTAs ("Order Now", "Add to Cart")
- Apply Fresh Basil Green (#3E7C59) for positive actions and category filters
- Use Warm Yellow (#F6C447) sparingly for promotional badges and special offers
- Maintain minimum 4.5:1 contrast ratio for all text/background combinations
- Use Cool Mint (#B3E9D3) for interactive feedback and hover states

#### ❌ DON'Ts
- Never use more than 3 colors simultaneously in a single component
- Don't use Rich Tomato Red for error states (use Spicy Red instead)
- Avoid using Warm Yellow for large background areas (overwhelming)
- Never place Slate Gray text on Fresh Basil Green backgrounds (poor contrast)
- Don't use Cool Mint for final conversion actions (not strong enough)

---

## Typography

### Font Families

#### Primary Font Stack
**Poppins** - Headings, buttons, and emphasis text
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Secondary Font Stack
**Inter** - Body text, descriptions, and UI text
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Accent Font Stack
**Dancing Script** - Special headings and promotional text (use sparingly)
```css
font-family: 'Dancing Script', cursive, serif;
```

### Type Scale

| Usage | Font | Size (px) | Size (rem) | Line Height | Font Weight | Letter Spacing |
|-------|------|-----------|------------|-------------|-------------|----------------|
| Hero Heading | Poppins | 48 | 3.0 | 1.2 | 700 (Bold) | -0.02em |
| H1 | Poppins | 36 | 2.25 | 1.2 | 700 (Bold) | -0.01em |
| H2 | Poppins | 28 | 1.75 | 1.3 | 600 (SemiBold) | -0.005em |
| H3 | Poppins | 24 | 1.5 | 1.3 | 600 (SemiBold) | 0 |
| H4 | Poppins | 20 | 1.25 | 1.4 | 500 (Medium) | 0 |
| Body Large | Inter | 18 | 1.125 | 1.5 | 400 (Regular) | 0 |
| Body | Inter | 16 | 1.0 | 1.5 | 400 (Regular) | 0 |
| Body Small | Inter | 14 | 0.875 | 1.4 | 400 (Regular) | 0.01em |
| Caption | Inter | 12 | 0.75 | 1.3 | 500 (Medium) | 0.05em |
| Button Large | Poppins | 18 | 1.125 | 1.2 | 600 (SemiBold) | 0.01em |
| Button | Poppins | 16 | 1.0 | 1.2 | 600 (SemiBold) | 0.01em |
| Button Small | Poppins | 14 | 0.875 | 1.2 | 600 (SemiBold) | 0.02em |

### Typography Usage Rules

#### ✅ DO's
- Use Poppins for all interactive elements (buttons, links, CTAs)
- Limit Dancing Script to 1-2 instances per page maximum
- Maintain consistent line heights within text blocks
- Use medium to bold weights for important information
- Apply proper letter spacing for smaller text sizes

#### ❌ DON'Ts
- Never use more than 3 different font sizes in a single component
- Don't use Dancing Script for body text or UI elements
- Avoid using font weights below 400 (too light for food imagery)
- Never use all caps for more than 3 words
- Don't mix Poppins and Inter within the same text block

---

## Spacing & Grid

### Spacing System (8px Base Unit)

| Token | Value (px) | Value (rem) | Usage |
|-------|------------|-------------|-------|
| xs | 4 | 0.25 | Icon padding, fine details |
| sm | 8 | 0.5 | Element spacing, small gaps |
| md | 16 | 1.0 | Standard component spacing |
| lg | 24 | 1.5 | Section spacing, card padding |
| xl | 32 | 2.0 | Large section breaks |
| 2xl | 48 | 3.0 | Major layout sections |
| 3xl | 64 | 4.0 | Hero sections, major breaks |
| 4xl | 96 | 6.0 | Page-level spacing |

### Grid System

#### Desktop (≥1024px)
- **Container Max Width**: 1200px
- **Columns**: 12-column grid
- **Gutter**: 24px (lg spacing)
- **Margin**: 48px (2xl spacing)

#### Tablet (768px - 1023px)  
- **Container Max Width**: 100%
- **Columns**: 8-column grid
- **Gutter**: 16px (md spacing)
- **Margin**: 24px (lg spacing)

#### Mobile (<768px)
- **Container Max Width**: 100%
- **Columns**: 4-column grid  
- **Gutter**: 16px (md spacing)
- **Margin**: 16px (md spacing)

### Spacing Usage Rules

#### ✅ DO's
- Always use multiples of 8px for all spacing values
- Use consistent spacing within component families
- Apply larger spacing (xl, 2xl) between different content sections
- Use smaller spacing (xs, sm) for fine-tuned element positioning

#### ❌ DON'Ts
- Never use arbitrary spacing values outside the 8px system
- Don't use the same spacing token for dramatically different purposes
- Avoid cramped layouts - use minimum md spacing for touch targets
- Don't exceed 4xl spacing except for major page-level breaks

---

## Component Library

### Buttons

#### Primary Button (Order Now, Add to Cart)
```css
background: #D6453F (Rich Tomato Red)
color: #FAFAF8 (Soft White)
border-radius: 24px (pill shape)
padding: 12px 24px (md lg)
font: Poppins, 16px, 600 weight
min-height: 48px (touch-friendly)
box-shadow: 0 2px 8px rgba(214, 69, 63, 0.3)
```

**States:**
- Hover: `background: #C93832`, slight scale (1.02)
- Active: `background: #B52D27`, scale (0.98)  
- Disabled: `background: #E5E5E5`, `color: #999999`

#### Secondary Button (View Menu, Learn More)
```css
background: transparent
color: #3E7C59 (Fresh Basil Green)
border: 2px solid #3E7C59
border-radius: 24px
padding: 10px 24px
font: Poppins, 16px, 600 weight
min-height: 48px
```

**States:**
- Hover: `background: #3E7C59`, `color: #FAFAF8`
- Active: `background: #2E5D43`

#### Icon Button (Cart, Profile, Search)
```css
background: transparent
border-radius: 50%
padding: 12px
min-height: 48px
min-width: 48px
```

### Cards

#### Menu Item Card
```css
background: #FAFAF8 (Soft White)
border-radius: 16px
padding: 16px (md)
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)
border: 1px solid #E5E5E5 (Whisper Gray)
```

**Structure:**
- Image: 16:9 aspect ratio, border-radius: 12px
- Title: H4 typography, Slate Gray color
- Description: Body Small, Medium Gray color  
- Price: Poppins, 18px, 700 weight, Rich Tomato Red
- CTA Button: Primary button, full width

**States:**
- Hover: box-shadow increases, slight scale (1.02)
- Active: scale (0.98)

#### Category Card
```css
background: linear-gradient(135deg, #3E7C59, #2E5D43)
color: #FAFAF8 (Soft White)
border-radius: 12px  
padding: 20px (lg + sm)
min-height: 120px
```

### Form Elements

#### Input Field
```css
background: #FAFAF8 (Soft White)
border: 2px solid #E5E5E5 (Whisper Gray)
border-radius: 8px
padding: 12px 16px (md)
font: Inter, 16px, 400 weight
min-height: 48px
```

**States:**
- Focus: border-color: #3E7C59, box-shadow: 0 0 0 3px rgba(62, 124, 89, 0.1)
- Error: border-color: #E74C3C
- Success: border-color: #27AE60

#### Search Bar (Hero)
```css
background: #FFFFFF
border: none
border-radius: 24px
padding: 16px 48px 16px 20px (lg 3xl md lg)
font: Inter, 18px, 400 weight
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)
min-height: 56px
```

### Navigation

#### Top Navigation Bar
```css
background: rgba(250, 250, 248, 0.95) (Soft White with transparency)
backdrop-filter: blur(10px)
border-bottom: 1px solid #E5E5E5
padding: 12px 24px (md lg)
position: sticky
z-index: 100
```

#### Category Filter Chips
```css
background: #B3E9D3 (Cool Mint)
color: #3E7C59 (Fresh Basil Green)
border-radius: 20px
padding: 8px 16px (sm md)
font: Poppins, 14px, 500 weight
```

**Active State:**
```css
background: #3E7C59 (Fresh Basil Green)
color: #FAFAF8 (Soft White)
```

### Component Usage Rules

#### ✅ DO's
- Use Primary buttons only for conversion actions
- Apply consistent border-radius within component families
- Ensure all interactive elements meet 48px minimum touch target
- Use subtle shadows to create depth and hierarchy
- Implement smooth transitions for all interactive states

#### ❌ DON'Ts
- Never use more than one Primary button per viewport
- Don't make touch targets smaller than 44px on any dimension
- Avoid using rounded corners smaller than 4px or larger than 24px
- Don't remove focus states for keyboard navigation
- Never use disabled buttons without clear alternative actions

---

## Visual Elements

### Iconography

#### Icon Library: Lucide React
- **Size Scale**: 16px, 20px, 24px, 32px
- **Stroke Width**: 1.5px (consistent across all icons)
- **Color**: Inherit from parent text color

#### Custom Food Icons
- **Dietary Badges**: Vegan leaf, Gluten-free grain, Spicy pepper, Halal crescent
- **Size**: 16px × 16px
- **Style**: Outlined, 1.5px stroke, rounded line caps
- **Colors**: 
  - Vegan: #3E7C59 (Fresh Basil Green)
  - Gluten-Free: #F6C447 (Warm Yellow)
  - Spicy: #D6453F (Rich Tomato Red)
  - Halal: #666666 (Medium Gray)

### Photography

#### Image Specifications
- **Aspect Ratios**: 
  - Hero Images: 16:9
  - Menu Items: 4:3
  - Category Headers: 3:2
- **Quality**: High resolution (minimum 2x for retina)
- **Format**: WebP with JPEG fallback
- **Style**: Bright, natural lighting with minimal props

#### Image Treatment
- **Border Radius**: 
  - Hero: 16px
  - Menu Cards: 12px  
  - Thumbnails: 8px
- **Loading**: Progressive with placeholder blur
- **Alt Text**: Descriptive for accessibility

### Badges & Labels

#### Deal Badge
```css
background: #F6C447 (Warm Yellow)
color: #333333 (Slate Gray)
border-radius: 12px
padding: 4px 8px (xs sm)
font: Poppins, 12px, 600 weight
position: absolute
top: 8px, right: 8px
```

#### Status Indicator
```css
border-radius: 50%
width: 8px
height: 8px
```
- **Available**: #27AE60 (Success Alt)
- **Limited**: #F39C12 (Saffron Orange)
- **Sold Out**: #E74C3C (Spicy Red)

### Visual Element Usage Rules

#### ✅ DO's
- Use consistent icon sizes within interface sections
- Apply dietary badges prominently but not overwhelming
- Maintain consistent image aspect ratios within component types
- Use status indicators to communicate availability clearly

#### ❌ DON'Ts
- Never mix icon styles (filled and outlined) in the same component
- Don't use more than 3 dietary badges per menu item
- Avoid low-quality or inconsistent photography styles
- Never place badges where they obscure important image content

---

## Animations & Interactions

### Transition Specifications

#### Standard Transitions
```css
transition-duration: 200ms
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) /* ease-out */
```

#### Bounce Animation (Button Press)
```css
transform: scale(0.98)
transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
```

#### Hover Scale
```css
transform: scale(1.02)
transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Specific Animations

#### Add to Cart Animation
1. **Duration**: 800ms total
2. **Stages**:
   - Item image scales to 0.8 and moves toward cart icon (400ms)
   - Cart icon bounces (scale 1.2 → 1.0) (200ms)
   - Success feedback appears (200ms)

#### Order Progress Tracker
```css
/* Base state */
.progress-step {
  background: #E5E5E5 (Whisper Gray)
  color: #999999 (Light Gray)
  transition: all 300ms ease-out
}

/* Active state */
.progress-step.active {
  background: #F6C447 (Warm Yellow)
  color: #333333 (Slate Gray)
  transform: scale(1.1)
}

/* Completed state */  
.progress-step.completed {
  background: #3E7C59 (Fresh Basil Green)
  color: #FAFAF8 (Soft White)
}
```

#### Loading States

#### Skeleton Loading
```css
background: linear-gradient(90deg, 
  #E5E5E5 25%, 
  #F0F0F0 50%, 
  #E5E5E5 75%
)
background-size: 200% 100%
animation: shimmer 1.5s infinite
```

#### Spinner
```css
border: 3px solid #E5E5E5
border-top-color: #D6453F (Rich Tomato Red)
border-radius: 50%
width: 24px
height: 24px
animation: spin 1s linear infinite
```

### Animation Usage Rules

#### ✅ DO's
- Use animations to provide feedback for user actions
- Keep animation durations under 500ms for UI interactions
- Apply consistent easing functions throughout the system
- Provide reduced motion options for accessibility

#### ❌ DON'Ts
- Never use animations longer than 1 second for UI feedback
- Don't animate more than 3 elements simultaneously
- Avoid animations that could trigger vestibular disorders
- Never animate without purpose - every animation should enhance UX

---

## Layout Patterns

### Page Layouts

#### Homepage Layout
```
Header (Sticky, 72px height)
Hero Section (80vh min-height)
  - Search Bar (Centered)
  - Featured Dishes (3-column grid, desktop)
Category Navigation (Horizontal scroll, 60px height)
Menu Sections (Stacked, 2xl spacing between)
Footer (4xl spacing from last section)
```

#### Menu Page Layout
```
Header (Sticky, 72px height)
Filter Bar (Sticky below header, 48px height)
Content Grid:
  - Sidebar (Categories, 25% width, desktop only)  
  - Main Content (Menu items, 75% width)
    - 3 columns desktop
    - 2 columns tablet
    - 1 column mobile
Cart Drawer (Overlay, right side desktop / bottom sheet mobile)
```

#### Checkout Layout
```
Header (Simplified, 72px height)
Progress Indicator (Center, lg spacing)
Form Container (Max-width 600px, centered)
  - Order Summary (Sticky, top)
  - Form Fields (Stacked, md spacing)
  - Payment Section (xl spacing from fields)
  - Submit Actions (2xl spacing, full width)
```

### Component Layouts

#### Menu Item Card Layout
```css
display: flex
flex-direction: column
gap: 12px (md spacing - xs)

.image-container {
  aspect-ratio: 4/3
  overflow: hidden
  border-radius: 12px
}

.content {
  padding: 0 4px /* slight inset */
  flex-grow: 1
  display: flex
  flex-direction: column
  gap: 8px (sm spacing)
}

.actions {
  margin-top: auto /* push to bottom */
  padding-top: 8px (sm spacing)
}
```

#### Navigation Layout
```css
display: flex
justify-content: space-between
align-items: center
padding: 12px 24px (md lg)

.nav-left {
  display: flex
  align-items: center
  gap: 16px (md spacing)
}

.nav-right {
  display: flex
  align-items: center  
  gap: 12px (md spacing - xs)
}
```

### Layout Usage Rules

#### ✅ DO's
- Use consistent container widths across pages
- Apply proper spacing between major layout sections
- Ensure layouts adapt gracefully across all breakpoints
- Use flexbox for component-level layouts, grid for page-level

#### ❌ DON'Ts
- Never create layouts wider than 1200px without proper centering
- Don't use fixed heights that could cause content overflow
- Avoid layouts that require horizontal scrolling on desktop
- Never stack more than 5 elements vertically without grouping

---

## Implementation Guidelines

### Accessibility Requirements

#### Color Contrast
- **Minimum Ratio**: 4.5:1 for normal text
- **Large Text**: 3:1 for text 18px+ or 14px+ bold
- **UI Components**: 3:1 for interactive elements

#### Focus Management
- Visible focus indicators on all interactive elements
- Logical tab order following visual hierarchy
- Skip links for keyboard navigation
- Focus trapping in modals and drawers

#### Screen Reader Support
- Semantic HTML structure (headings, landmarks, lists)
- Alt text for all meaningful images
- ARIA labels for complex interactions
- Status updates announced for dynamic content

### Performance Guidelines

#### Image Optimization
- Use WebP format with JPEG fallbacks
- Implement lazy loading for below-fold images
- Provide multiple image sizes for responsive layouts
- Use appropriate compression (80-85% quality)

#### Code Splitting
- Lazy load non-critical components
- Bundle critical CSS inline
- Defer non-essential JavaScript
- Implement progressive loading for menu items

#### Loading Performance
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- First Input Delay < 100ms

### Cross-Platform Consistency

#### Browser Support
- **Minimum Support**: Last 2 versions of major browsers
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Feature Detection**: Use @supports for CSS features
- **Polyfills**: Include for essential features only

#### Device Testing
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Tablet**: iPad Safari, Android Chrome
- **Accessibility**: Test with screen readers and keyboard navigation

### Quality Assurance Checklist

#### Visual Consistency
- [ ] All colors match exact hex codes specified
- [ ] Typography scales consistently across components
- [ ] Spacing follows 8px grid system
- [ ] Border radius values are consistent within component families

#### Interaction States
- [ ] Hover states implemented for all interactive elements
- [ ] Active states provide clear feedback
- [ ] Loading states prevent user confusion
- [ ] Error states are informative and actionable

#### Responsive Behavior
- [ ] Layouts work at all specified breakpoints
- [ ] Touch targets meet minimum 44px requirement
- [ ] Text remains readable at all sizes
- [ ] Images scale appropriately without distortion

#### Content Requirements
- [ ] All placeholder text replaced with realistic content
- [ ] Images have appropriate alt text
- [ ] Error messages are user-friendly
- [ ] Success messages provide clear next steps

---

## Design Tokens (Implementation Reference)

```css
:root {
  /* Colors */
  --color-primary: #D6453F;
  --color-secondary: #3E7C59;  
  --color-background: #FAFAF8;
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;
  --color-accent: #F6C447;
  --color-interactive: #B3E9D3;
  --color-border: #E5E5E5;
  --color-error: #E74C3C;
  --color-warning: #F39C12;
  --color-success: #27AE60;

  /* Typography */
  --font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-accent: 'Dancing Script', cursive, serif;

  /* Spacing */
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
  --spacing-4xl: 6rem;      /* 96px */

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 24px;
  --radius-full: 50%;

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.15);

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Breakpoints */
  --breakpoint-mobile: 768px;
  --breakpoint-tablet: 1024px;
  --breakpoint-desktop: 1200px;
}
```

This design system documentation provides comprehensive guidelines for implementing a consistent, beautiful, and functional food delivery application. Every specification is designed to work together as a cohesive system while prioritizing user experience and conversion optimization.