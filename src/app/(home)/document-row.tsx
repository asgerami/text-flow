import { TableCell, TableRow } from "@/components/ui/table";
import { SiGoogledocs } from "react-icons/si";
import { Doc } from "../../../convex/_generated/dataModel";
import { Building2Icon, CircleUserIcon, MoreVertical } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface DocumentRowProps {
  document: Doc<"documents">;
}

export const DocumentRow = ({ document }: DocumentRowProps) => {
  return (
    <TableRow className="cursorpointer">
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]">
        {document.title}
        </TableCell>
        <TableCell className="text-muted-foreground hidden md:flex flex-items gap-2">
          {document.organizationId ? (
            <Building2Icon className="size-4" />
          ) : (
            <CircleUserIcon className="size-4" />
          )}
          {document.organizationId ? "Organization" : "Personal"}
        </TableCell>
        <TableCell className="text-muted-foreground hidden md:table-cell">
          {format(new Date(document._creationTime), "MM dd, yyyy")}
        </TableCell>
        <TableCell>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="size-4" />
        </Button>
      </TableCell>        
    </TableRow>
  );
};
