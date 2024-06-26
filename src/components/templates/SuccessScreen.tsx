import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function SuccessScreen({ cancelBox }) {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-center">
            <div className="flex justify-center scale-50">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfz3upZJUzgki4bn27faJf6gPIIo7Yo5HxZg&s"
                alt="success"
              />
            </div>
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
              <Button onClick={cancelBox}>Okay</Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
