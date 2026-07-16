import type { AdminModerationData } from "../types";

export async function getAdminModeration(): Promise<AdminModerationData> {
  return Promise.resolve({
    summaryCards: [
      {
        title: "PENDING REVIEWS",
        periodLabel: "Last 7 days",
        currentValue: "128",
        previousValue: "158",
      },
      {
        title: "APPROVED TODAY",
        periodLabel: "Last 7 days",
        currentValue: "42",
        previousValue: "98",
      },
      {
        title: "REJECTED",
        periodLabel: "Last 7 days",
        currentValue: "42",
        previousValue: "25",
      },
    ],
    searchPlaceholder: "Search manuscripts...",
    tableTitle: "PENDING REVIEWS",
    reviews: [
      {
        id: "review-1",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
          },
        ],
      },
      {
        id: "review-2",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
          },
        ],
      },
      {
        id: "review-3",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
          },
        ],
      },
      {
        id: "review-4",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
          },
        ],
      },
      {
        id: "review-5",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
          },
        ],
      },
      {
        id: "review-6",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
          },
        ],
      },
      {
        id: "review-7",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
          },
        ],
      },
      {
        id: "review-8",
        bookName: "The Architecture of Leadership",
        authorName: "Rodney Smith",
        authorInitials: "RS",
        category: "Leadership",
        format: "Hardcover",
        contentType: "eBook",
        submittedAt: "Jun 15, 2026",
        status: "Pending",
        description:
          "A comprehensive guide to building resilient organizations in the modern era. Smith draws upon two decades of executive coaching to outline structural frameworks for sustainable leadership.",
        priorityNote:
          "This manuscript is in the priority queue and requires review within 48 hours.",
        checklist: [
          {
            id: "cover-design",
            title: "Cover Design",
            detail: "Meets resolution and bleed requirements",
            checked: true,
          },
          {
            id: "book-description",
            title: "Book Description",
            detail: "Clear, engaging, and typo-free",
            checked: true,
          },
          {
            id: "formatting",
            title: "Formatting",
            detail: "Margins, fonts, and chapters align",
            checked: false,
          },
          {
            id: "grammar",
            title: "Grammar & Syntax",
            checked: false,
          },
          {
            id: "metadata",
            title: "Metadata & Tags",
            checked: false,
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
