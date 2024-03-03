import { DialogClose } from "@radix-ui/react-dialog"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export interface CustomModalProps {
  buttonIcon?: any
  contentTitle?: string
  content: any
  actionTitle?: string
  actionIcon?: any
}

export default function CustomModal({
  buttonIcon,
  contentTitle,
  content,
  actionTitle,
  actionIcon,
}: CustomModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className="w-10 p-0">
          {buttonIcon}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{contentTitle}</DialogTitle>
          <DialogDescription>
            All the apps that can simplify your daily management tasks.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
        </div> */}

        <DialogClose asChild>
          {content}

          {/* <Button type="submit">Save changes222</Button> */}
        </DialogClose>

        <DialogFooter>
          {actionTitle ? (
            <Button type="submit">{actionIcon} Save changes</Button>
          ) : (
            ""
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}