import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function SuccessScreen({ finalPage, cancelBox }) {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-center">
            Thank you for submitting the form
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="overflow-auto max-h-fit p-4 text-center">
          Your form has been successfully submitted!
        </AlertDialogDescription>
        <AlertDialogFooter className="p-4">
          <div className="flex flex-row justify-between gap-64 m-4">
            <div>
              <Button className="text-white " onClick={cancelBox}>
                Cancel
              </Button>
            </div>
            <div>
              <Button onClick={finalPage}>Continue</Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
