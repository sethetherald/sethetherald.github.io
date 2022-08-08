import { PostOrPageFrontmatter } from "src/types";

const PublicationAndModifiedDate = ({
  publication_date,
  modified_date,
}: Pick<PostOrPageFrontmatter, "publication_date" | "modified_date">) => (
  <div className="text-base mb-10 font-sans">
    <span className="mr-6">
      Published {new Date(publication_date).toLocaleString()}
    </span>
    {modified_date && (
      <span>Updated {new Date(modified_date).toLocaleString()}</span>
    )}
  </div>
);

export default PublicationAndModifiedDate;
