"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useId, useRef, useState, type FormEvent } from "react";

export function SupportWidget() {
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function resetForm() {
    setSubject("");
    setDescription("");
    setFileName("");
    setSubmitted(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleClose() {
    setOpen(false);
    resetForm();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open support request form"
        className="fixed bottom-4 right-4 z-40 inline-flex size-[112px] items-center justify-center rounded-full  p-3 transition hover:-translate-y-1   lg:bottom-4 lg:right-4 lg:size-[140px] cursor-pointer"
      >
        <div className="relative size-[82px] overflow-hidden rounded-full lg:size-[104px] cursor-pointer">
          <Image
            src="/support-logo.png"
            alt="Support"
            fill
            priority
            sizes="(min-width: 1024px) 140px, 112px"
            className="object-contain"
          />
        </div>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
          <button
            type="button"
            aria-label="Close support dialog"
            onClick={handleClose}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative z-10 w-full max-w-xl bg-white p-8 shadow-[0_20px_50px_rgba(31,42,36,0.16)]">
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close support form"
              className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-stone-100 hover:text-neutral-800"
            >
              <X className="size-4" />
            </button>

            {submitted ? (
              <div className="space-y-4 pr-8">
                <h2 className="text-xl font-semibold text-neutral-800">
                  Support request sent
                </h2>
                <p className="text-sm leading-6 text-neutral-500">
                  Our team received your message and will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex bg-orange-400 px-8 py-5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#de8a2b]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="pb-1.5">
                    <label
                      htmlFor="support-subject"
                      className="text-sm font-medium capitalize leading-4 text-neutral-800"
                    >
                      issue subject
                    </label>
                  </div>
                  <input
                    id="support-subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Enter a short title for your issue"
                    className="h-12 rounded-lg bg-stone-100 px-4 py-3.5 text-sm text-neutral-800 outline outline-1 outline-stone-300 placeholder:text-neutral-800/50 focus:outline-orange-400"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="pb-1.5">
                    <label
                      htmlFor="support-description"
                      className="text-sm font-medium leading-4 text-neutral-800"
                    >
                      Issue Description
                    </label>
                  </div>
                  <textarea
                    id="support-description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Describe your issue in detail. Include any relevant information that may help our support team understand and resolve your request."
                    className="h-36 resize-none rounded-lg bg-stone-100 px-4 py-3.5 text-sm leading-5 text-neutral-800 outline outline-1 outline-stone-300 placeholder:text-neutral-500 focus:outline-orange-400"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="pb-1.5">
                    <label
                      htmlFor={inputId}
                      className="text-sm font-medium leading-4 text-neutral-800"
                    >
                      Attachments
                    </label>
                  </div>

                  <input
                    ref={fileInputRef}
                    id={inputId}
                    type="file"
                    className="sr-only"
                    onChange={(event) =>
                      setFileName(event.target.files?.[0]?.name ?? "")
                    }
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-24 flex-col items-center justify-center gap-1.5 rounded-lg bg-stone-50 outline outline-1 outline-orange-400 transition hover:bg-orange-50"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14V6M12 6L8.5 9.5M12 6L15.5 9.5M4 16.5V18.5C4 19.0523 4.44772 19.5 5 19.5H19C19.5523 19.5 20 19.0523 20 18.5V16.5"
                        stroke="#F59E0B"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="px-4 text-center text-sm leading-5 text-neutral-500">
                      {fileName || "Drag & drop files here or click to browse"}
                    </span>
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center bg-orange-400 px-8 py-5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#de8a2b] cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
