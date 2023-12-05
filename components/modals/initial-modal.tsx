"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle 
} from "@/components/ui/dialog" 

const formSchema = z.object({
    name: z.string().min(1, {
        message: "server name is required"
    }),
    imageUrl: z.string().min(1, {
        message: "server image is required"
    }),
})

export const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            imageUrl: "",
        }
    })

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return(
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className="text-zinc-500 text-center">
                        Give your server a personality with a name and an image, you can always change it later
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}