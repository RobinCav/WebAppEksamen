import Comment from './Comment'


export default function Comments ({Comments}) {

    return(
      <section className="issues">
      <h2>Henvendelser</h2>
      <ul>
        {Comments?.map((Comment) => (
          <Comment key={Comment.id} item={Comment} />
        ))}
      </ul>
    </section>
    )


}