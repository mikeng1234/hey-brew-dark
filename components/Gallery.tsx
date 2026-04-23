"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PHOTOS = [
  { src: "/images/samples/sample1.jpg",  span: "col-span-2 row-span-2" }, // big
  { src: "/images/samples/sample2.jpg",  span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample3.jpg",  span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample4.jpg",  span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample5.jpg",  span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample6.jpg",  span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample7.jpg",  span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample8.jpg",  span: "col-span-2 row-span-1" }, // wide
  { src: "/images/samples/sample9.jpg",  span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample10.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample11.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/samples/sample12.jpg", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#19ba97" }}>
            Event Snapshots
          </p>
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
          >
            Hey Brew at your event.
            <br />
            <span style={{ color: "#dca47d" }}>Every cup, a memory.</span>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "200px" }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`relative overflow-hidden group ${photo.span}`}
              style={{ borderRadius: "14px" }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <Image
                src={photo.src}
                alt={`Hey Brew event photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Subtle dark overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,0,0,0.25)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
