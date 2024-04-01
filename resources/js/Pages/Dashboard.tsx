import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> */}
      <div>
        <div className="bg-white dark:bg-neutral-900 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 text-gray-900 dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quibusdam quae doloribus hic recusandae quia culpa, sequi modi et,
            sapiente, beatae voluptatum quo tempora unde suscipit sint! Quidem,
            eum ea. Commodi deserunt voluptatem, nam corporis adipisci vitae?
            Rem beatae velit sapiente totam repellendus dolor libero dolorum
            deleniti modi, amet ex at ratione maiores recusandae, non possimus
            minima voluptatem architecto, a cupiditate? Dolores culpa sunt
            mollitia dolore ea vitae nostrum quibusdam adipisci. Pariatur
            officia tenetur quos labore consectetur, consequatur itaque id rerum
            esse debitis corrupti placeat voluptatibus nisi! Ut at laudantium
            tempora vero nulla sint recusandae eum voluptates a inventore,
            fugiat suscipit nihil, alias aperiam aspernatur. Aut, reiciendis
            tempore aliquam sint doloribus nisi consequatur voluptates harum,
            neque suscipit soluta laborum blanditiis, accusamus adipisci! Ad
            minus non a harum facere odit vitae debitis quaerat omnis accusamus
            quo, dignissimos saepe dolorem delectus, asperiores tenetur!
            Suscipit eligendi vitae iste temporibus aut odit itaque dolorum
            praesentium omnis, earum reiciendis tempora iusto. Totam quas
            incidunt numquam suscipit, ad sit iste nulla harum magnam quae
            impedit delectus ab. Qui facere hic ipsam quasi eligendi ex
            assumenda, saepe quo voluptatem atque commodi, magnam illum cum
            aliquid, officia libero aut. Error, officiis sunt? Sint,
            perspiciatis sapiente? Repellendus, sit labore?
          </div>
          <div className="p-6 text-gray-900 dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quibusdam quae doloribus hic recusandae quia culpa, sequi modi et,
            sapiente, beatae voluptatum quo tempora unde suscipit sint! Quidem,
            eum ea. Commodi deserunt voluptatem, nam corporis adipisci vitae?
            Rem beatae velit sapiente totam repellendus dolor libero dolorum
            deleniti modi, amet ex at ratione maiores recusandae, non possimus
            minima voluptatem architecto, a cupiditate? Dolores culpa sunt
            mollitia dolore ea vitae nostrum quibusdam adipisci. Pariatur
            officia tenetur quos labore consectetur, consequatur itaque id rerum
            esse debitis corrupti placeat voluptatibus nisi! Ut at laudantium
            tempora vero nulla sint recusandae eum voluptates a inventore,
            fugiat suscipit nihil, alias aperiam aspernatur. Aut, reiciendis
            tempore aliquam sint doloribus nisi consequatur voluptates harum,
            neque suscipit soluta laborum blanditiis, accusamus adipisci! Ad
            minus non a harum facere odit vitae debitis quaerat omnis accusamus
            quo, dignissimos saepe dolorem delectus, asperiores tenetur!
            Suscipit eligendi vitae iste temporibus aut odit itaque dolorum
            praesentium omnis, earum reiciendis tempora iusto. Totam quas
            incidunt numquam suscipit, ad sit iste nulla harum magnam quae
            impedit delectus ab. Qui facere hic ipsam quasi eligendi ex
            assumenda, saepe quo voluptatem atque commodi, magnam illum cum
            aliquid, officia libero aut. Error, officiis sunt? Sint,
            perspiciatis sapiente? Repellendus, sit labore?
          </div>
          <div className="p-6 text-gray-900 dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quibusdam quae doloribus hic recusandae quia culpa, sequi modi et,
            sapiente, beatae voluptatum quo tempora unde suscipit sint! Quidem,
            eum ea. Commodi deserunt voluptatem, nam corporis adipisci vitae?
            Rem beatae velit sapiente totam repellendus dolor libero dolorum
            deleniti modi, amet ex at ratione maiores recusandae, non possimus
            minima voluptatem architecto, a cupiditate? Dolores culpa sunt
            mollitia dolore ea vitae nostrum quibusdam adipisci. Pariatur
            officia tenetur quos labore consectetur, consequatur itaque id rerum
            esse debitis corrupti placeat voluptatibus nisi! Ut at laudantium
            tempora vero nulla sint recusandae eum voluptates a inventore,
            fugiat suscipit nihil, alias aperiam aspernatur. Aut, reiciendis
            tempore aliquam sint doloribus nisi consequatur voluptates harum,
            neque suscipit soluta laborum blanditiis, accusamus adipisci! Ad
            minus non a harum facere odit vitae debitis quaerat omnis accusamus
            quo, dignissimos saepe dolorem delectus, asperiores tenetur!
            Suscipit eligendi vitae iste temporibus aut odit itaque dolorum
            praesentium omnis, earum reiciendis tempora iusto. Totam quas
            incidunt numquam suscipit, ad sit iste nulla harum magnam quae
            impedit delectus ab. Qui facere hic ipsam quasi eligendi ex
            assumenda, saepe quo voluptatem atque commodi, magnam illum cum
            aliquid, officia libero aut. Error, officiis sunt? Sint,
            perspiciatis sapiente? Repellendus, sit labore?
          </div>
          <div className="p-6 text-gray-900 dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quibusdam quae doloribus hic recusandae quia culpa, sequi modi et,
            sapiente, beatae voluptatum quo tempora unde suscipit sint! Quidem,
            eum ea. Commodi deserunt voluptatem, nam corporis adipisci vitae?
            Rem beatae velit sapiente totam repellendus dolor libero dolorum
            deleniti modi, amet ex at ratione maiores recusandae, non possimus
            minima voluptatem architecto, a cupiditate? Dolores culpa sunt
            mollitia dolore ea vitae nostrum quibusdam adipisci. Pariatur
            officia tenetur quos labore consectetur, consequatur itaque id rerum
            esse debitis corrupti placeat voluptatibus nisi! Ut at laudantium
            tempora vero nulla sint recusandae eum voluptates a inventore,
            fugiat suscipit nihil, alias aperiam aspernatur. Aut, reiciendis
            tempore aliquam sint doloribus nisi consequatur voluptates harum,
            neque suscipit soluta laborum blanditiis, accusamus adipisci! Ad
            minus non a harum facere odit vitae debitis quaerat omnis accusamus
            quo, dignissimos saepe dolorem delectus, asperiores tenetur!
            Suscipit eligendi vitae iste temporibus aut odit itaque dolorum
            praesentium omnis, earum reiciendis tempora iusto. Totam quas
            incidunt numquam suscipit, ad sit iste nulla harum magnam quae
            impedit delectus ab. Qui facere hic ipsam quasi eligendi ex
            assumenda, saepe quo voluptatem atque commodi, magnam illum cum
            aliquid, officia libero aut. Error, officiis sunt? Sint,
            perspiciatis sapiente? Repellendus, sit labore?
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
