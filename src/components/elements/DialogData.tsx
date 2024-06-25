import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DialogData({ content, handleSubmit, onCancel }) {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="overflow-auto max-h-fit">
          {content}
        </AlertDialogDescription>
        <AlertDialogFooter>
          <div className="flex flex-row gap-10 mt-4 mb-2">
            <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
            <Button onClick={handleSubmit}>Continue</Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
