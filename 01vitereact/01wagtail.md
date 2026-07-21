# Wagtail Notes (Day 1)

> **Goal:** Understand what Wagtail is, why it exists, and how it differs from plain Django.

---

# What is Wagtail?

Wagtail is a **Content Management System (CMS)** built **on top of Django**.

Think of it like this:

```
┌─────────────────────────────┐
│         Wagtail             │
│  User-friendly CMS layer    │
├─────────────────────────────┤
│          Django             │
│      The actual engine      │
└─────────────────────────────┘
```

- **Django** provides the core framework (ORM, Views, Templates, URLs, Authentication, etc.).
- **Wagtail** adds a beautiful editing interface so **non-developers** can manage website content.

Wagtail **does not replace Django**.

It simply extends it.

---

# Why was Wagtail created?

Imagine you've built a company website using plain Django.

Now the marketing team wants to:

- Edit the homepage
- Create a new blog page
- Publish a new landing page
- Update the About page

With plain Django, you would often have to build custom admin interfaces or forms for these tasks.

Django's built-in admin is designed for **structured data**, such as:

- Products
- Orders
- Users

It is **not designed for managing website pages** in a tree structure.

---

# What was missing in Django?

Django doesn't provide these features out of the box:

- ❌ Page hierarchy (Home → Blog → Post)
- ❌ Built-in page tree
- ❌ Draft vs Live publishing
- ❌ Save without publishing
- ❌ Revision history
- ❌ User-friendly CMS for content editors

These are exactly the problems Wagtail solves.

---

# Wagtail Pages

One of the biggest ideas in Wagtail is the **Page**.

A Wagtail Page is:

- A Django Model
- And behaves like a Django View

Instead of only storing data, a Page also knows how to display itself.

---

# The `serve()` Method

Every Wagtail Page has a method called:

```python
serve()
```

This method behaves like a Django view.

Instead of writing a separate view for every page,

each Page object already knows how to render itself.

---

# Django Flow

In normal Django:

```
URL
 ↓
View
 ↓
Model
 ↓
Template
```

The developer creates:

- URL
- View
- Template

for every page.

---

# Wagtail Flow

In Wagtail:

```
URL
 ↓
Page Object
 ↓
serve()
 ↓
Template
```

The Page itself handles rendering.

This removes the need to create a custom view for every content page.

---

# Why is this useful?

Imagine an editor creates a new page called:

```
Summer Sale
```

In plain Django, the developer would need to create:

- URL
- View
- Template logic

In Wagtail, the editor simply creates the page.

The Page already knows how to serve itself.

---

# A Wagtail Page

Think of a Page as having three responsibilities:

```
Database
      │
      ▼
 Page
      │
      ├── Stores content
      │
      ├── Displays itself (serve())
      │
      └── Defines what editors can edit (content_panels)
```

So a Page is much smarter than a normal Django model.

---

# Editors in Django

Editors do **not** edit the live webpage directly.

They work inside the Django Admin (control room).

They fill out structured fields like:

- Title
- Body
- Image

Then click:

- Preview
- Publish

The website is rendered from this stored data.

---

# What are Structured Fields?

Structured fields are like a government form.

Example:

```
Name
Date of Birth
Address
```

Every form follows the same structure.

A computer always knows where to find:

- Name
- DOB
- Address

Similarly, Django models have predefined fields like:

```python
title
body
image
```

Every page of that type follows the same structure.

---

# Django CMS vs Wagtail

## django CMS

Uses **placeholders**.

Think of placeholders as empty boxes where editors can insert almost anything.

Very flexible.

---

## Wagtail

Uses **defined model fields**.

Each page type has a predefined structure.

Example:

```
BlogPage

Title
Body
Banner Image
Author
```

This provides better consistency and makes the code easier to maintain.

---

# Wagtail URLs

At the end of your project's `urls.py`, you'll usually see:

```python
path("", include(wagtail_urls))
```

This is called the **catch-all URL**.

---

# Why must it be last?

The catch-all tries to match **every remaining URL**.

If you place it before your custom URLs:

```
accounts/login/

api/

dashboard/
```

Wagtail will intercept those requests first.

It will try to find a matching Page.

If none exists:

```
404 Not Found
```

Your Django views will never execute.

This is one of the most common beginner mistakes.

Always place:

```python
path("", include(wagtail_urls))
```

**at the very end** of `urls.py`.

---

# How Wagtail Finds a Page

Suppose someone visits:

```
/blog/my-first-post/
```

Wagtail processes the URL like this:

```
1. Split URL into segments

["blog", "my-first-post"]
```

↓

```
2. Start at the site's Root Page
```

↓

```
3. Look for a child page whose slug is "blog"
```

↓

```
Found ✓

Move into Blog page
```

↓

```
4. Look for a child page whose slug is

"my-first-post"
```

↓

```
Found ✓

Move into that page
```

↓

```
5. No URL segments remain
```

↓

```
Call:

my_first_post_page.serve(request)
```

↓

```
Render Template
```

---

# Mental Model

Whenever someone visits a page:

```
Browser
   │
   ▼
URL
   │
   ▼
Wagtail URL Router
   │
   ▼
Find Root Page
   │
   ▼
Walk down the Page Tree
   │
   ▼
Correct Page Found
   │
   ▼
serve(request)
   │
   ▼
Template
   │
   ▼
HTML Response
```

---

# Key Takeaways

- Wagtail is a CMS built on top of Django.
- Django remains the underlying engine.
- Wagtail adds a powerful, editor-friendly content management system.
- Every Wagtail Page is a Django Model.
- A Page also behaves like a View through `serve()`.
- Wagtail automatically routes requests by walking the Page Tree.
- `content_panels` define what editors can edit.
- Editors work through the Wagtail Admin, not directly on live pages.
- Wagtail uses structured page models rather than placeholder-based content.
- `include(wagtail_urls)` must always be the last URL pattern because it is a catch-all.