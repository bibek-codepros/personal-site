import Image from "next/image";

import { cn } from "@/lib/utils";

type StoryImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/** Photography that supports the narrative. Never a decorative frame. */
export function StoryImage({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  className,
  sizes = "(min-width: 1024px) 560px, 100vw",
}: StoryImageProps) {
  return (
    <figure className={cn("w-full", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="w-full rounded-[20px] object-cover"
      />
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
