import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import InputText from "./InputText";
import InputDatetime from "./InputDatetime";
import { EventType } from "../types";

interface EventFormProps {
  children: React.ReactNode;
  event?: EventType;
  repository: string;
}
export default function EventForm({
  children,
  event,
  repository,
}: EventFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = new Date(formData.get("date") as string).toISOString();
    const organizer = formData.get("organizer") as string;
    const organizerLink = formData.get("organizerLink") as string;
    const location = formData.get("location") as string;

    const template = `---
title: "${title}"
description: "${description}"
date: "${date}"
location: "${location}"
organizer: "${organizer}"
organizerLink: "${organizerLink}"
---`;

    console.log({ template });
    const url = `${repository}/edit/main/src/events/${
      event!.filename
    }?value=${template}`;

    window.open(url, "_blank");

    console.log("submit", {
      title,
      description,
      date,
      organizer,
      organizerLink,
      location,
    });
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        {children}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold">
                    Edit Event
                  </Dialog.Title>

                  <form className="flex flex-col gap-6" onSubmit={submit}>
                    <div className="flex flex-col gap-4">
                      <InputText
                        label="Title"
                        name="title"
                        required
                        defaultValue={event?.title}
                        placeholder="The title of the event"
                      />
                      <InputText
                        label="Description"
                        name="description"
                        defaultValue={event?.description}
                        placeholder="A small description of the event"
                      />
                      <InputDatetime
                        label="Date"
                        name="date"
                        required
                        defaultValue={event?.date}
                      />
                      <InputText
                        label="Organizer"
                        name="organizer"
                        required
                        defaultValue={event?.organizer}
                        placeholder="Who is organizing the event?"
                      />
                      <InputText
                        label="Organizer Link"
                        name="organizerLink"
                        defaultValue={event?.organizerLink}
                        placeholder="Link to the organizer's website"
                      />
                      <InputText
                        label="Location"
                        name="location"
                        defaultValue={event?.location}
                        placeholder="Where is the event?"
                      />
                    </div>

                    <div className="text-right">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit changes
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
