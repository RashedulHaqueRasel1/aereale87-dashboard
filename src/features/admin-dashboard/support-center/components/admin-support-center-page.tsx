"use client";

import { useEffect, useState } from "react";
import { Download, Eye, FileText, ImageIcon, Paperclip, Send, X } from "lucide-react";

import type { AdminSupportCenterData, SupportCenterIssueRecord } from "../types";

type AdminSupportCenterPageProps = {
  data: AdminSupportCenterData;
};

export function AdminSupportCenterPage({ data }: AdminSupportCenterPageProps) {
  const [selectedIssue, setSelectedIssue] = useState<SupportCenterIssueRecord | null>(null);

  useEffect(() => {
    if (!selectedIssue) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIssue(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedIssue]);

  return (
    <>
      <section className="overflow-hidden border border-stone-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
        <div className="border-b border-stone-200 p-6">
          <h2 className="text-lg font-bold leading-7 text-neutral-800">{data.title}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1020px] w-full">
            <thead className="bg-lime-50">
              <tr className="text-left text-sm font-medium text-teal-950">
                <th className="px-4 py-4">DATE</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4">User Type</th>
                <th className="px-4 py-4">Issue Subject</th>
                <th className="px-4 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.issues.map((issue) => (
                <tr key={issue.id} className="border-b border-stone-200">
                  <td className="px-4 py-4 text-sm leading-5 text-neutral-800">{issue.date}</td>
                  <td className="px-4 py-4 text-sm leading-5 text-neutral-800">{issue.name}</td>
                  <td className="px-4 py-4 text-sm leading-5 text-neutral-800">{issue.email}</td>
                  <td className="px-4 py-4 text-sm leading-5 text-neutral-800">{issue.userType}</td>
                  <td className="px-4 py-4 text-sm font-semibold leading-5 text-black">
                    {issue.issueSubject}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      type="button"
                      aria-label={`View ${issue.issueSubject}`}
                      className="mx-auto flex rounded-full p-2 text-neutral-800 transition-colors hover:bg-stone-100"
                      onClick={() => setSelectedIssue(issue)}
                    >
                      <Eye className="size-5" strokeWidth={1.9} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-stone-200 px-4 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{data.pagination.showingLabel}</p>

          <div className="flex items-center gap-1 self-end sm:self-auto">
            <button
              type="button"
              className="h-6 border border-stone-300 px-3 text-[10px] leading-4 text-neutral-500"
            >
              Previous
            </button>
            {data.pagination.pages.map((page) => (
              <button
                key={page}
                type="button"
                className={
                  page === data.pagination.currentPage
                    ? "flex size-6 items-center justify-center bg-[#486c59] text-[10px] leading-4 text-white"
                    : "flex size-6 items-center justify-center border border-stone-300 text-[10px] leading-4 text-neutral-500"
                }
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="h-6 border border-stone-300 px-3 text-[10px] leading-4 text-neutral-500"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {selectedIssue ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 py-8"
          onClick={() => setSelectedIssue(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="support-issue-title"
            className="w-full max-w-[650px] border border-stone-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between px-6 pt-6">
              <div className="space-y-1">
                <p className="text-base font-normal uppercase leading-5 text-stone-500">
                  Issue Subject
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2
                    id="support-issue-title"
                    className="text-2xl font-semibold leading-7 text-zinc-800"
                  >
                    {selectedIssue.issueSubject}
                  </h2>
                  <p className="text-sm leading-4 text-stone-500">{selectedIssue.date}</p>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close issue details"
                className="rounded-full p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-neutral-800"
                onClick={() => setSelectedIssue(null)}
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="px-6 pb-6 pt-4">
              <div className="space-y-4">
                <div className="rounded-lg border border-stone-200 bg-stone-100/60 p-4">
                  <div className="space-y-2">
                    <p className="text-base font-medium uppercase tracking-wide text-stone-500">
                      Issue Description
                    </p>
                    <p className="text-xl leading-8 text-zinc-800/90">
                      {selectedIssue.issueDescription}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <Paperclip className="size-4 text-stone-500" />
                      <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                        Attachments ({selectedIssue.attachments.length})
                      </p>
                    </div>
                  </div>

                  {selectedIssue.attachments.length ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {selectedIssue.attachments.map((attachment) => (
                        <div
                          key={attachment.id}
                          className="flex items-center gap-3 rounded-lg border border-stone-300 bg-white p-3"
                        >
                          <div
                            className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                              attachment.type === "image"
                                ? "bg-green-900/10 text-green-900"
                                : "bg-orange-700/10 text-orange-700"
                            }`}
                          >
                            {attachment.type === "image" ? (
                              <ImageIcon className="size-5" />
                            ) : (
                              <FileText className="size-5" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium leading-5 text-zinc-800">
                              {attachment.name}
                            </p>
                            <p className="text-xs leading-4 text-stone-500">{attachment.size}</p>
                          </div>
                          <button
                            type="button"
                            aria-label={`Download ${attachment.name}`}
                            className="flex size-8 items-center justify-center rounded-[10px] text-stone-500 transition-colors hover:bg-stone-100"
                          >
                            <Download className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-stone-500">No attachments added.</p>
                  )}

                  <div className="flex min-h-24 items-start justify-between rounded-lg border border-stone-300 bg-orange-50 p-4">
                    <p className="text-base text-neutral-800">Type your reply</p>
                    <Send className="size-5 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
