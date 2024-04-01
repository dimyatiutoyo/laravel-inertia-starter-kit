import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { type LucideIcon } from "lucide-react";
import { MenuItems } from "@/types/menu_items";

function Sidebar({
  className = "",
  menuItems = [],
}: {
  className?: string;
  menuItems: MenuItems[];
}) {
  return (
    <aside
      className={cn(
        className,
        "w-0 md:w-60 lg:w-72 transition-all sticky top-16 md:block"
      )}
    >
      <ScrollArea className="h-[calc(100vh-3.5rem)] shrink-0 py-4 px-6 lg:px-8 hidden md:block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni
        itaque tempora alias? Neque, excepturi dolorum. Nesciunt, temporibus
        saepe. Hic maxime quibusdam veritatis quas aliquid vel facere doloribus
        nostrum eligendi magnam totam quam repellendus beatae nihil, cupiditate
        veniam ad esse maiores, temporibus odit officia distinctio ducimus
        impedit placeat. Distinctio, id pariatur dolor nemo aliquid ullam
        tenetur, officia dignissimos eligendi, eaque corrupti voluptatibus
        eveniet aperiam error ratione praesentium provident qui ipsam ea magnam
        unde adipisci. Tempora maiores tenetur nemo odio recusandae aliquid
        dolores alias obcaecati, ullam veritatis doloribus omnis accusamus
        cumque beatae. Totam, impedit excepturi! Harum, mollitia iste! Mollitia
        similique iure perferendis modi? Ipsum inventore quibusdam esse quidem
        at, vero doloribus fugit maxime placeat corporis quos omnis eum cum,
        expedita similique facere dolore officia ipsa aliquid fugiat accusamus
        ipsam magni fuga nobis! Dolorum, animi omnis. Sed veniam sequi tempore
        placeat sit ad iure maxime doloremque molestias tempora rem repellat,
        ipsa officiis dicta, nulla harum saepe aspernatur quidem labore nisi
        provident! Natus quis fugit eaque accusantium voluptatum. Laboriosam
        excepturi ipsum omnis incidunt, soluta nisi magnam tempore impedit sit
        amet, odit id blanditiis rerum laudantium dignissimos inventore eligendi
        veritatis deserunt culpa eos labore earum unde. Eveniet aperiam qui
        eligendi sint illo rerum praesentium earum corporis esse beatae porro
        totam in, voluptatibus minus enim repudiandae. Saepe suscipit excepturi
        rem fuga doloremque blanditiis omnis voluptate, maiores debitis. Nulla
        explicabo labore modi harum dolorem id rem deleniti accusamus ab
        adipisci, blanditiis et porro consectetur sapiente quaerat aperiam a
        eveniet possimus eligendi atque. Doloremque repudiandae ducimus
        dignissimos eum nihil possimus quis quos corporis facere. Error nemo eum
        commodi maiores quod odio sequi nostrum, voluptatem, ipsam minima
        tenetur in neque aspernatur possimus quam amet at libero perspiciatis.
        Dolorem, praesentium autem reprehenderit illum optio minima architecto,
        quo tenetur perferendis dolore modi quaerat excepturi pariatur est
        officiis numquam maxime! Voluptate sequi fugiat dolorum sint corporis,
        pariatur fuga porro debitis recusandae! Eveniet nam reiciendis quo
        accusamus praesentium alias totam unde, temporibus tempora voluptatum
        dolorem quidem et recusandae labore soluta porro, laborum maiores
        provident eaque aliquid similique. Repellat adipisci et eius, impedit
        soluta similique natus fuga blanditiis ullam veritatis. Necessitatibus
        ullam reiciendis inventore accusantium quia totam sunt maiores
        doloribus. Velit veritatis consequatur officia quam totam earum animi,
        nulla accusantium expedita impedit aperiam tenetur placeat praesentium
        fugiat! Repellendus necessitatibus a modi dicta odio nisi alias odit et
        dolor molestiae sequi eos, quas officia animi distinctio voluptas quos
        quidem ad velit consectetur. Quod molestias, minus architecto adipisci,
        voluptatum fugit quis explicabo debitis, culpa dolorem et tempore amet?
        Illum, inventore amet dolore at quis optio laboriosam maxime dolor ipsa
        commodi repudiandae voluptatum, quia qui nostrum! Aut laudantium nobis
        eveniet explicabo possimus nisi aliquid, fuga accusantium nihil eius
        porro quam totam numquam deserunt corporis. Sunt blanditiis odio aut
        autem dolorem voluptate, laborum aliquam eum voluptates debitis ad. Fuga
        beatae illo voluptates recusandae dolor veritatis veniam, dolore,
        excepturi voluptas similique quam dolorum ea molestias commodi sequi!
        Recusandae veritatis magni repellendus deleniti nobis quos reiciendis
        quod! Facilis enim minima quod labore beatae natus quidem dolore quae
        tenetur quasi! ABAAAA
      </ScrollArea>
    </aside>
  );
}

export default Sidebar;
