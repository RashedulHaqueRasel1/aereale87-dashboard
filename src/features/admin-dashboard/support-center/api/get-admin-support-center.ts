import type { AdminSupportCenterData } from "../types";

export async function getAdminSupportCenter(): Promise<AdminSupportCenterData> {
  return Promise.resolve({
    title: "Issue Lists",
    issues: [
      {
        id: "issue-1",
        date: "Jun 15, 2026",
        name: "John Smith",
        email: "john.smith@email.com",
        userType: "Author",
        issueSubject: "Royalty Calculation Issue",
        issueDescription:
          'I recently received a payout for my paperback title "The Midnight Atlas", but the royalty figure shown on my dashboard does not match my expectations. Based on my contract, I should be receiving a 15% royalty on net sales, yet the calculated amount appears to reflect a lower percentage. I have attached a screenshot of my dashboard and the latest sales report for your review. Could you please investigate and confirm whether the calculation is accurate?',
        attachments: [
          {
            id: "attachment-1",
            name: "Screenshot.jpg",
            size: "1.4 MB",
            type: "image",
          },
          {
            id: "attachment-2",
            name: "Sales-Report.pdf",
            size: "320 KB",
            type: "pdf",
          },
        ],
      },
      {
        id: "issue-2",
        date: "Jun 16, 2026",
        name: "Jane Doe",
        email: "jane.doe@email.com",
        userType: "User",
        issueSubject: "Manuscript Submission Review",
        issueDescription:
          "I submitted my manuscript for review three days ago, but the status still appears unchanged in the dashboard. I want to confirm whether my submission was received successfully and if there are any missing requirements holding up the review.",
        attachments: [
          {
            id: "attachment-3",
            name: "Submission-Receipt.pdf",
            size: "240 KB",
            type: "pdf",
          },
        ],
      },
      {
        id: "issue-3",
        date: "Jun 17, 2026",
        name: "Alice Johnson",
        email: "alice.j@email.com",
        userType: "Author",
        issueSubject: "Cover Art Proposal",
        issueDescription:
          "I would like feedback on the updated cover art proposal before approving it for the next publishing cycle. Please confirm if the current design meets the brand and technical guidelines.",
        attachments: [
          {
            id: "attachment-4",
            name: "Cover-Draft.jpg",
            size: "980 KB",
            type: "image",
          },
        ],
      },
      {
        id: "issue-4",
        date: "Jun 18, 2026",
        name: "Michael Brown",
        email: "michael.b@email.com",
        userType: "User",
        issueSubject: "Social Media Campaign",
        issueDescription:
          "Our scheduled social media campaign assets are not appearing in the latest shared folder. I need confirmation on whether the launch materials are finalized and available for download.",
        attachments: [],
      },
      {
        id: "issue-5",
        date: "Jun 19, 2026",
        name: "Emily Davis",
        email: "emily.d@email.com",
        userType: "User",
        issueSubject: "Final Proof Review",
        issueDescription:
          "The final proof I downloaded contains formatting shifts on several chapter pages. I am requesting a final verification before I approve the release version.",
        attachments: [
          {
            id: "attachment-5",
            name: "Proof-Notes.pdf",
            size: "410 KB",
            type: "pdf",
          },
        ],
      },
      {
        id: "issue-6",
        date: "Jun 20, 2026",
        name: "David Wilson",
        email: "david.w@email.com",
        userType: "Author",
        issueSubject: "Project Timeline Update",
        issueDescription:
          "Please share the revised project timeline for the current release so I can coordinate editorial and launch deliverables with the rest of the team.",
        attachments: [],
      },
      {
        id: "issue-7",
        date: "Jun 21, 2026",
        name: "Sarah Lee",
        email: "sarah.l@email.com",
        userType: "User",
        issueSubject: "Contract Negotiation",
        issueDescription:
          "I need clarification on the updated contract terms, specifically around distribution windows and payout schedules, before signing the final document.",
        attachments: [
          {
            id: "attachment-6",
            name: "Contract-Notes.pdf",
            size: "285 KB",
            type: "pdf",
          },
        ],
      },
      {
        id: "issue-8",
        date: "Jun 22, 2026",
        name: "Chris Evans",
        email: "chris.e@email.com",
        userType: "User",
        issueSubject: "Sales Forecast Report",
        issueDescription:
          "Could you review the attached sales assumptions and confirm whether the forecast inputs align with the latest platform performance data?",
        attachments: [
          {
            id: "attachment-7",
            name: "Forecast.xlsx",
            size: "520 KB",
            type: "pdf",
          },
        ],
      },
      {
        id: "issue-9",
        date: "Jun 23, 2026",
        name: "Megan Thompson",
        email: "megan.t@email.com",
        userType: "Author",
        issueSubject: "Market Analysis Findings",
        issueDescription:
          "I am sharing our market analysis summary and would appreciate a quick review of the recommendations before we distribute it to partner teams.",
        attachments: [
          {
            id: "attachment-8",
            name: "Market-Analysis.pdf",
            size: "760 KB",
            type: "pdf",
          },
        ],
      },
      {
        id: "issue-10",
        date: "Jun 24, 2026",
        name: "Brian Martinez",
        email: "brian.m@email.com",
        userType: "User",
        issueSubject: "System Upgrade Notification",
        issueDescription:
          "After the latest system upgrade, I noticed changes in the dashboard workflow and would like guidance on whether any actions are required from our side.",
        attachments: [],
      },
      {
        id: "issue-11",
        date: "Jun 25, 2026",
        name: "Laura Garcia",
        email: "laura.g@email.com",
        userType: "User",
        issueSubject: "Employee Feedback Survey",
        issueDescription:
          "We are preparing the employee feedback survey results and want to confirm the reporting format expected before we submit the final package.",
        attachments: [],
      },
      {
        id: "issue-12",
        date: "Jun 26, 2026",
        name: "Kevin Lee",
        email: "kevin.l@email.com",
        userType: "User",
        issueSubject: "Budget Review Meeting",
        issueDescription:
          "Please confirm the documents we need to bring to the budget review meeting and whether the previous quarter adjustments are already reflected in the agenda.",
        attachments: [],
      },
      {
        id: "issue-13",
        date: "Jun 27, 2026",
        name: "Sophie King",
        email: "sophie.k@email.com",
        userType: "Author",
        issueSubject: "Compliance Checklist Review",
        issueDescription:
          "I have completed most of the compliance checklist and need support validating the remaining items before the final submission deadline.",
        attachments: [
          {
            id: "attachment-9",
            name: "Checklist.pdf",
            size: "190 KB",
            type: "pdf",
          },
        ],
      },
      {
        id: "issue-14",
        date: "Jun 28, 2026",
        name: "Tyler Brown",
        email: "tyler.b@email.com",
        userType: "Author",
        issueSubject: "Client Feedback Report",
        issueDescription:
          "I am forwarding the latest client feedback report for review. Please advise whether any critical revisions should be addressed before the next presentation.",
        attachments: [
          {
            id: "attachment-10",
            name: "Client-Feedback.pdf",
            size: "350 KB",
            type: "pdf",
          },
        ],
      },
    ],
    pagination: {
      showingLabel: "Showing 1 to 4 of 24 entries",
      pages: [1, 2, 3],
      currentPage: 1,
    },
  });
}
