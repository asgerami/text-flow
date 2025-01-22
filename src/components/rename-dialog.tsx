"use client";
import { useMutation } from "convex/react";
import { useState } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { set } from "date-fns";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: React.ReactNode;
}

export const RenameDialog = ({
  documentId,
  initialTitle,
  children,
}: RenameDialogProps) => {
  const update = useMutation(api.documents.updateById);
  const [isUpdating, setIsUpdating] = useState(false);

  const [title, setTitle] = useState(initialTitle);
  const [open, setOpen] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    update({ id: documentId, title: title.trim() || "Untitled" }).finally(
      () => {
        setIsUpdating(false);
        setOpen(false);
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Rename document</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Document name"
            onClick={(e) => e.stopPropagation()}
            />
          </div>
          <DialogFooter>
            <Button
            type="button"
            variant="ghost"
            disabled={isUpdating}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            >
              Cancel
              </Button>
            <Button
             type="submit"
             disabled={isUpdating}
             onClick={(e) => e.stopPropagation()}
            >
              Save
              </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};