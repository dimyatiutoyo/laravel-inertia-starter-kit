import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";

function Footer() {
  const page = usePage<PageProps<{ appName?: string }>>();
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 max-w-7xl mx-auto">
      <div className="flex gap-2 text-neutral-500 dark:text-neutral-400">
        <p className="font-semibold">{page.props.appName}</p>
        <div>
          Built with <a href="">shadcn/ui</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
