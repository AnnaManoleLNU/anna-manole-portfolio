"use client"

import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type DialogImageProps = {
  /** Path to the thumbnail image (displayed in page) */
  thumbSrc: string
  /** Path to the full-size image (displayed in dialog) */
  fullSrc?: string
  /** alt text for the image */
  alt: string
  /** Intrinsic dimensions for thumbnail */
  thumbWidth: number
  thumbHeight: number
  /** Intrinsic dimensions for full-size image */
  fullWidth?: number
  fullHeight?: number
  /** Optional: class for thumbnail container */
  className?: string
}

export function DialogImage({
  thumbSrc,
  fullSrc,
  alt,
  thumbWidth,
  thumbHeight,
  fullWidth,
  fullHeight,
  className,
}: DialogImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`rounded-lg overflow-hidden border border-foreground/20 shadow-sm ${className || ""}`}
          aria-label={`View larger version of ${alt}`}
        >
          <Image
            src={thumbSrc}
            alt={alt}
            width={thumbWidth}
            height={thumbHeight}
            className="w-auto h-auto max-w-full"
            sizes="(max-width: 767px) 100vw, 50vw"
            quality={90}
          />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]">
        <DialogHeader>
          <DialogTitle>{alt}</DialogTitle>
          <DialogDescription>
            Click outside or press ESC to close the image preview.
          </DialogDescription>
        </DialogHeader>

        <div className="relative w-full h-full">
          <Image
            src={fullSrc || thumbSrc}
            alt={alt}
            width={fullWidth || thumbWidth}
            height={fullHeight || thumbHeight}
            className="w-full h-auto"
            sizes="90vw"
            quality={95}
            priority
          />
        </div>

        
      </DialogContent>
    </Dialog>
  )
}
