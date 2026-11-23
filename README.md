# TeleRadiology

### Centralized Teleradiology Service Platform

TeleRadiology is a web-based centralized teleradiology platform designed to connect hospitals and diagnostic facilities with a centralized team of radiologists for remote medical imaging interpretation and reporting coordination.

The platform enables healthcare facilities to submit imaging examination requests, while TeleRadiology manages case intake, radiologist assignments, reporting workflows, and secure report delivery.

**Project Status:** Educational Prototype — Under Development

---

## Overview

Many healthcare facilities face challenges accessing radiology reporting services, particularly where qualified radiologists and specialized resources are limited.

TeleRadiology aims to address these challenges through a centralized service-provider model.

Instead of allowing hospitals to independently search for and hire radiologists, TeleRadiology operates as the central service provider. It manages its own radiologist team and coordinates the entire reporting workflow.

### How It Works

1. A hospital or diagnostic facility submits an imaging examination request.
2. TeleRadiology receives and validates the submitted case.
3. An authorized operations officer assigns the case to an eligible radiologist.
4. The radiologist reviews the examination materials and prepares a report.
5. The report goes through the finalization process.
6. The finalized report is securely delivered to the requesting facility.

---

## Key Features

### 1. Authentication and User Managementd
- Secure user authentication.
- Role-based access control.
- User account management.
- Protected application routes.

### 2. Healthcare Facility Management
- Register and manage healthcare facilities.
- Manage facility users.
- Maintain facility-specific records.
- Restrict access to authorized facility information.

### 3. Patient Management
- Register fictional patient records.
- Generate unique patient identifiers.
- Search and manage patient records.
- Maintain facility-level data isolation.

### 4. Examination and Case Management
- Create imaging examination requests.
- Submit cases to TeleRadiology.
- Manage examination information.
- Upload permitted sample attachments.
- Track case status and history.

### 5. Central Operations Management
- Manage incoming examination requests.
- Review submitted cases.
- Request missing information.
- Assign and reassign radiologists.
- Monitor the overall service workflow.

### 6. Radiologist Management
- Manage the radiologist roster.
- Configure demonstration specialties and modalities.
- Manage availability information.
- View assigned cases.
- Accept or decline assignments.

### 7. Reporting Management
- Create structured report drafts.
- Save and update report drafts.
- Simulate report finalization.
- Maintain report version history.
- Control report release to facilities.

### 8. Notifications and Audit Logs
- In-application notifications.
- Case and assignment notifications.
- Report release notifications.
- Track important user activities.
- Maintain workflow audit history.

### 9. Dashboard and Analytics
- Monitor submitted cases.
- Track cases awaiting assignment.
- Monitor ongoing examinations.
- View completed and released reports.
- Display operational statistics.

---

## User Roles

TeleRadiology supports the following main user roles:

| Role | Responsibilities |
|---|---|
| Facility Admin | Manages facility users and facility records |
| Facility Staff | Registers fictional patients and submits examination requests |
| Operations Officer | Reviews cases and manages radiologist assignments |
| Radiologist | Reviews assigned cases and prepares reports |
| System Admin | Manages accounts, roles and platform configuration |

Each role has specific permissions to ensure that users can only access authorized resources.

---

## Technology Stack

The project uses the following technologies:

| Technology | Purpose |
|---|---|
| Next.js | Full-stack web application framework |
| React | User interface development |
| TypeScript | Type-safe application development |
| Tailwind CSS | Responsive UI styling |
| PostgreSQL | Relational database |
| Prisma ORM | Database access and schema management |
| Git & GitHub | Version control and collaboration |

### Planned Future Technologies

| Technology | Purpose |
|---|---|
| Orthanc | DICOM image storage and management |
| OHIF Viewer | Medical imaging visualization |
| DICOMweb | Medical imaging communication |

These technologies are planned for future development and are not assumed to be implemented in the initial MVP.

---

## System Architecture

TeleRadiology follows a centralized application architecture.

```text
        Healthcare Facilities
                 |
                 v
          Facility Portal
                 |
                 v
       +--------------------+
       |                    |
       |    Next.js App     |
       |                    |
       +--------------------+
                 |
        Server-side Services
                 |
       +--------------------+
       | Authentication     |
       | Authorization      |
       | Case Management    |
       | Assignment         |
       | Reporting          |
       | Notifications      |
       +--------------------+
                 |
                 v
            Prisma ORM
                 |
                 v
           PostgreSQL
```

The Next.js application handles the frontend and server-side application logic. Prisma provides type-safe database access, while PostgreSQL stores structured application data.

---

## Project Structure

The proposed application structure:

```text
TeleRadiology/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── facility/
│   │   ├── operations/
│   │   ├── radiologist/
│   │   ├── admin/
│   │   └── api/
│   │
│   ├── components/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── facilities/
│   │   ├── patients/
│   │   ├── cases/
│   │   ├── operations/
│   │   ├── radiologists/
│   │   ├── assignments/
│   │   ├── reports/
│   │   ├── notifications/
│   │   └── administration/
│   │
│   ├── lib/
│   │
│   └── services/
│
├── tests/
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Case Workflow

The platform uses a structured case lifecycle.

```text
Draft
  |
  v
Submitted
  |
  v
Intake Review
  |
  +------> Needs Information
  |
  v
Ready for Assignment
  |
  v
Assigned
  |
  v
Awaiting Acceptance
  |
  v
In Progress
  |
  v
Report Draft
  |
  v
Finalized
  |
  v
Released
```

Additional states include Assignment Declined, Rejected and Cancelled.

All important status transitions are validated on the server and recorded in the case history.

---

## Getting Started

### Prerequisites

Before running the project, make sure you have installed:

- Node.js (LTS version recommended)
- npm
- PostgreSQL
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/mega-gech/TeleRadiology.git
```

### 2. Navigate to the Project Directory

```bash
cd TeleRadiology
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/teleradiology?schema=public"

```

Replace the database credentials with your local PostgreSQL configuration.

### 5. Configure Prisma

Generate the Prisma Client:

```bash
npx prisma generate
```

Run database migrations after creating your Prisma schema:

```bash
npx prisma migrate dev --name init
```

### 6. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

**Note:** These are the standard setup steps for the proposed Next.js and Prisma architecture. They assume the corresponding dependencies, scripts, and initial Prisma schema have been configured.

---

## Security and Privacy

Security is an important part of TeleRadiology.

The project aims to implement:

- Role-based access control (RBAC).
- Facility-level data isolation.
- Secure password hashing.
- Server-side authorization.
- Protected file uploads.
- Audit logging.
- Secure environment variable management.
- Controlled report versioning and release.

---

## Development Roadmap

| Phase | Development Area | Status |
|---|---|---|
| 1 | Project foundation and database setup | Planned |
| 2 | Authentication and authorization | Planned |
| 3 | Facility and patient management | Planned |
| 4 | Examination and case management | Planned |
| 5 | Operations and radiologist assignment | Planned |
| 6 | Reporting and report delivery | Planned |
| 7 | Notifications, audit and analytics | Planned |
| 8 | Testing and security improvements | Planned |
| 9 | Future DICOM/PACS integration research | Future |

---

## Important Notice

**EDUCATIONAL PROTOTYPE — NOT FOR CLINICAL USE**

TeleRadiology is initially an educational software project developed for demonstration and learning purposes.

- Only fictional patient information should be used.
- Only non-clinical sample files should be uploaded.
- The platform is not approved for real clinical reporting or diagnosis.
- Simulated reports are not clinical reports.
- Clinical deployment requires appropriate professional, legal, regulatory, security and institutional review and approval.

---

## Project Vision

The long-term vision of TeleRadiology is to establish a reliable centralized teleradiology service platform that helps healthcare facilities access remote radiology reporting services through an organized, secure and scalable digital workflow.

---

## Author

**Project:** TeleRadiology  
**Project Type:** Full-Stack Web Application  
**Initial Market Context:** Ethiopia

---

*Built with the goal of improving access to coordinated radiology reporting services through technology.*
