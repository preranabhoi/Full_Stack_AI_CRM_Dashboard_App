# 🤖 AI CRM — Full-Stack AI-Powered CRM System

A modern, full-stack **AI-powered Customer Relationship Management (CRM)** application built with the **MERN stack**, **Tailwind CSS**, and **Google Gemini AI**.

The application helps sales teams manage leads, contacts, deals, notes, and follow-up tasks while using AI to summarize leads, generate sales emails, calculate lead risk, and provide actionable pipeline insights.



## ✨ Features

### 🔐 Authentication

* Secure user registration and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected API routes
* Automatic authentication restoration on page refresh
* User profile management
* Owner-scoped data for multi-tenant support

---

### 👥 Leads Management

Manage your entire sales lead database from a powerful interface.

* Create, read, update, and delete leads
* Live search
* Filter by:

  * Stage
  * Priority
  * Source
* Sortable columns
* Bulk lead deletion
* CSV export
* Table view
* Card view
* Lead detail drawer
* Inline editing
* Quick AI actions

---

### 📊 Sales Pipeline

Visualize and manage your deals with a drag-and-drop Kanban pipeline.

**Pipeline stages:**

```text
New → Qualified → Proposal → Won
                    ↓
                   Lost
```

Features include:

* Drag-and-drop deal management
* Persistent deal ordering
* Stage-based value totals
* Deal movement between stages
* Pipeline value tracking
* Open and closed deal analysis

---

### 👤 Contacts Management

Keep customer and prospect information organized.

* Full CRUD functionality
* Searchable contacts
* Contact tags
* Favorite contacts
* Contact detail drawer
* Contact editing
* Contact deletion
* Lead/contact relationships

---

### 📝 Notes

Keep important information attached to your leads.

* Create and edit notes
* Link notes to leads
* Pin important notes
* Search note content
* Masonry-style note layout
* Delete notes

---

### ✅ Follow-Up Tasks

Never miss an important sales follow-up.

* Create tasks
* Due dates
* Overdue detection
* Today's tasks
* Task status
* Task priority
* Grouped task lists
* Completion progress
* Lead-related tasks

---

## 🧠 AI Features

Powered by **Google Gemini**, the CRM provides intelligent sales assistance throughout the application.

### 🤖 AI Lead Summary

Generate an AI-powered analysis of any lead.

The AI provides:

* Lead summary
* Risk score from `0–100`
* Suggested priority
* Next best action

Example:

```json
{
  "summary": "The prospect has shown strong interest but has not responded to the last two follow-ups.",
  "riskScore": 72,
  "suggestedPriority": "high",
  "nextBestAction": "Send a personalized follow-up highlighting the implementation timeline."
}
```

---

### ✉️ AI Email Generator

Generate professional sales emails directly from a lead.

Choose:

* Email purpose
* Tone
* Lead context

Gemini generates:

```text
Subject: Following up on your CRM requirements

Body:
Hi John,

I wanted to follow up regarding your CRM requirements...
```

---

### 📈 AI Sales Insights

Analyze your entire sales pipeline using AI.

The AI returns:

* Overall pipeline health score
* Data-driven observations
* Sales risks
* Opportunities
* Prioritized recommendations
* Suggested actions

This turns raw CRM data into actionable sales intelligence.

---

### 🧩 Structured AI Output

All Gemini-powered functionality uses **structured JSON output / JSON schemas**.

This provides:

* Predictable AI responses
* Easier frontend integration
* Reliable data parsing
* Type-safe response handling
* Reduced formatting errors

---

## 📊 Dashboard Analytics

The CRM includes a premium fintech-style analytics dashboard.

### KPI Cards

Track important metrics such as:

* Total leads
* Open deals
* Pipeline value
* Won revenue
* Conversion metrics

### Charts

The dashboard includes:

* Pipeline engagement chart
* Revenue-won trend
* Leads-by-source donut chart
* Top open deals
* Recent activity feed
* Per-stage pipeline values

Analytics are generated from a centralized aggregation endpoint.

---

## 🏗️ Architecture

The backend follows a modular architecture:

```text
Routes
   ↓
Controllers
   ↓
Services
   ↓
Models
   ↓
MongoDB
```

Additional backend infrastructure includes:

* Centralized error handling
* Custom error class
* Async request handler
* JWT middleware
* Authentication middleware
* Owner-scoped database queries
* Dedicated AI service layer

---

## 🛠️ Tech Stack

### Frontend

* React 19
* JavaScript / TypeScript
* Tailwind CSS v4
* Custom shadcn-style UI components
* React Router
* Drag-and-drop UI
* Responsive design
* Charting library

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* REST API

### AI

* Google Gemini
* Structured JSON output
* JSON Schema

### Development

* Git
* GitHub
* MongoDB Atlas
* Environment variables
* ESLint
