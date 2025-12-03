import { Image, Button } from "@heroui/react";
import { BentoCard } from "./BentoCard";

export const ProjectBlock = () => {
    return (
        <BentoCard noPadding>
            {/* Top Half: Image */}
            <div className="h-1/2 w-full relative">
                <Image
                    removeWrapper
                    alt="Project screenshot"
                    className="z-0 w-full h-full object-cover"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                />
            </div>

            {/* Bottom Half: Content (We can add padding manually here) */}
            <div className="p-4 flex flex-col justify-between h-1/2">
                <div>
                    <h4 className="font-bold">unClut.ai</h4>
                    <p className="text-tiny text-default-500">80% less clutter</p>
                </div>
                <Button size="sm" color="primary" variant="flat">
                    View Case Study
                </Button>
            </div>
        </BentoCard>
    );
};