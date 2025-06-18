import ProductImages from "@/components/products/ProductImages";
import ProductDetails from "@/components/products/ProductDetails";

const mockProduct =   {
    id: '1',
    name: 'Classic White T-Shirt',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, consectetur rem. Iste doloribus minima corporis facilis. Fuga mollitia nostrum repellat, dicta corrupti cupiditate eum quae repudiandae, maxime delectus eligendi recusandae officia reprehenderit nobis? Quibusdam exercitationem eaque laboriosam saepe, mollitia id perferendis! Voluptate perferendis perspiciatis delectus debitis dignissimos, earum iure molestiae officiis optio quia, est aspernatur sapiente, eveniet qui odio sit consequuntur nam ad odit voluptas itaque ducimus harum similique. Eius nisi provident cumque omnis delectus veritatis reprehenderit mollitia ab non assumenda, officia quis doloremque! Est dolorem cupiditate nobis accusantium placeat dolor, perspiciatis mollitia ab dicta, officia quis tempore odio debitis laboriosam recusandae nam nulla quas, quidem iure natus officiis labore! Libero ullam eveniet nesciunt aperiam dolorum dolore repellendus maiores ratione consequatur modi id quae facilis, voluptatum assumenda nam accusamus enim in? Animi voluptates obcaecati dicta? Id repudiandae laboriosam ratione dicta facere sint cumque, libero inventore voluptates reiciendis hic, architecto commodi doloribus eum amet dolor. Expedita corporis dolor libero eligendi eveniet a nihil quam voluptate. Quas voluptatum omnis illum ex iste unde, similique repellendus nam asperiores aut dolorem reiciendis excepturi obcaecati aliquid harum iure commodi illo deleniti adipisci esse delectus error recusandae natus. Sit fugiat rem quia fugit neque consequatur praesentium assumenda soluta quae laboriosam, aliquid totam culpa necessitatibus at? Reprehenderit perferendis repudiandae ratione ex eligendi rem officiis, omnis in excepturi quod vero quos ipsam, atque repellat sunt enim facere rerum asperiores id similique aperiam laboriosam amet explicabo! Quaerat ratione doloribus eius voluptates in id ipsam dolor voluptatum cum ad maxime, officiis, fugiat magni culpa. Impedit ex, quidem neque distinctio minus tenetur. Doloribus, minima optio, eaque quaerat, debitis non voluptatum esse officia aspernatur accusantium est similique cum impedit nostrum mollitia tempora sint quas possimus at ipsam animi commodi ipsum deserunt. Corporis, omnis fuga, at harum eaque ipsam beatae in aperiam architecto quae accusantium explicabo a delectus esse inventore non cumque amet nesciunt reprehenderit alias eligendi quibusdam eius molestiae placeat? Ipsum dolore dolores pariatur cum tempora ipsa beatae rem placeat possimus neque atque sequi laboriosam, aperiam mollitia consectetur autem quia ex perferendis voluptate rerum, asperiores a quos? Dignissimos est adipisci autem nobis natus molestiae mollitia eos dolor! Reiciendis quia ad consequatur eum dolorum fugit corrupti, facilis in? Impedit sed corporis quidem? Velit culpa fugit dolore dignissimos quasi magnam assumenda sunt amet impedit repudiandae ipsam, delectus porro doloremque voluptatum corporis nulla repellat at animi doloribus minus tempore consequatur fuga. Repudiandae placeat cupiditate quibusdam temporibus? Iusto, temporibus ratione maiores non commodi modi ullam, recusandae voluptates nesciunt, rerum eligendi odit quaerat consequuntur hic quas molestias molestiae quam vitae ipsa. Ut delectus natus, non expedita consequuntur quod numquam! Voluptate assumenda blanditiis dolores. Cum dicta repellendus eos! Assumenda commodi hic exercitationem voluptas minima incidunt? Distinctio accusamus quae at rem modi quaerat eum! Atque repellat facere laboriosam quisquam a rerum, suscipit aliquam ducimus nihil voluptatum aperiam minima officiis maiores deleniti cum libero maxime consequatur neque quasi assumenda aliquid odit molestias expedita hic. Dicta eveniet harum eos cupiditate possimus. Nisi sit, porro ipsa laboriosam asperiores impedit libero assumenda quos.",
    price: 29.99,
    image: '/product/watch.jpeg',
    category: 'Clothing',
    rating: 4.5,
    quantity: 2,
  }

export default async function SingleProductPage( {
  params,
}: { 
  params: Promise<{productId: string}>
} ) {
  const productId = (await params).productId;
  return (
    <div className="relative flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-20">
      <div className="w-full lg:w-1/2 h-max">
        <ProductImages/>
      </div>
      <ProductDetails product={mockProduct}/>
    </div>
  )
}



