import { useState } from 'react';

export interface ISearch {
  sampleTextProp: string;
}

const Search: React.FC<ISearch> = ({ sampleTextProp }) => {
  const [searchTerm, setSearchTerm] = useState<string>();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchTerm);
  };

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
