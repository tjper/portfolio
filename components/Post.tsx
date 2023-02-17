import { z } from 'zod';

const contentSchema = z.object({
  id: z.string(),
  title: z.string(),
})

export type Content = z.infer<typeof contentSchema>;

type PostArgs = {
  content: Content,
}

export const Post = ({content}: PostArgs) => {
  return (
    <div>
      <h4>{content.title}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, sapien at sagittis scelerisque, justo odio consectetur nibh, id interdum metus risus vel sapien. Curabitur suscipit arcu non enim porta iaculis. Vivamus nunc tortor, eleifend eu ultrices nec, condimentum et lacus. Fusce tellus diam, blandit a aliquam vitae, pretium vel est. Cras hendrerit tellus vel urna gravida accumsan. Mauris nec dignissim justo. Duis congue mauris in mi feugiat ultrices. Vivamus id neque gravida, aliquet quam in, suscipit metus. In faucibus elit in aliquam ornare. Pellentesque non cursus arcu, id molestie nunc. Donec nec cursus ex. Pellentesque mollis ante id interdum ullamcorper. Mauris tempor elit in dolor finibus tincidunt.

Sed eu tellus vel odio tincidunt volutpat nec at arcu. In commodo lobortis est vitae ornare. Cras pharetra ac mi eget tempus. Nam tincidunt felis nec dui semper, in vestibulum urna tristique. Fusce pretium nibh dui, at lacinia enim condimentum nec. In pellentesque ultrices quam vitae tincidunt. Nulla ac varius ante. Duis finibus ut sapien nec mattis. Etiam hendrerit urna mauris, eget bibendum felis dignissim et.

Ut sodales arcu id nunc consectetur gravida. Duis sed elit id ante luctus venenatis. Etiam eu pellentesque est. Etiam rhoncus non mauris eu ultrices. Sed nec commodo nibh, eget tristique lorem. Integer ante odio, pulvinar sodales placerat tincidunt, tincidunt nec quam. Quisque pellentesque eget diam sed interdum. Integer efficitur vel ante in efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu quam aliquet, blandit ante non, dignissim urna. Suspendisse accumsan, erat at convallis luctus, odio nulla rhoncus nibh, a vestibulum ex eros sed ligula. Nulla blandit nibh eu leo eleifend efficitur. Pellentesque egestas sem eu libero suscipit gravida. Fusce euismod massa tellus, vel dignissim dui dignissim eu. Curabitur neque enim, sodales eu euismod ac, aliquet ac erat.

Ut fermentum fermentum rutrum. Duis quis elit vel risus lacinia ultricies. Nullam est metus, tincidunt in sagittis non, vehicula mollis turpis. Donec scelerisque non diam sit amet aliquet. Fusce venenatis orci ac dignissim semper. Phasellus aliquet enim eget metus vestibulum iaculis. Nulla nulla orci, rhoncus at nibh facilisis, lacinia varius mi. Curabitur vitae lacus vitae libero luctus dapibus ut sit amet magna. Nullam ac semper neque, et iaculis felis. Cras magna tortor, elementum a tempus id, suscipit in elit. Integer egestas diam nec nisi lobortis, in interdum libero pharetra. Sed pharetra augue ac magna convallis, vel ultricies augue aliquet. Sed sollicitudin, nisi id cursus ullamcorper, tellus diam malesuada sem, quis pharetra nisl nunc quis dolor. Curabitur fringilla dolor vel est rhoncus dapibus.

Aenean ut dui quis mi ornare mollis. Suspendisse sed enim maximus, placerat dolor vel, pulvinar elit. Maecenas aliquam eleifend mollis. Phasellus nec orci nec nulla imperdiet porttitor quis ut magna. Fusce ornare consectetur magna eget congue. Etiam tempor dui elit, non posuere libero euismod quis. Proin consectetur sodales lorem id fringilla.</p>
    </div>
  );
};
