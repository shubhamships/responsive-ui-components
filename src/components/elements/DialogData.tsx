import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DialogData({ content, handleSubmit }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
          Continue
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>{content}</AlertDialogDescription>
        <AlertDialogFooter>
          <div className="flex flex-row gap-10 mt-4 mb-2">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button onClick={handleSubmit}>Continue</Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
