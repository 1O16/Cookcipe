import React from "next";
import { memo, useMemo } from "react";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import * as S from "./styled";

interface QuillProps {
  recipeContent: string;
  setRecipeContent: (recipeContent: string) => void;
  quillRef: React.MutableRefObject<ReactQuill | null>;
}

export const Quill = memo(({ quillRef, recipeContent, setRecipeContent }: QuillProps) => {
  const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote", { color: [] }],
        [{ header: "1" }, { header: "2" }, { size: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] },
        ],
      ],
    }),
    []
  );
  return (
    <S.QuillElement>
      <ReactQuill
        ref={quillRef}
        value={recipeContent}
        onChange={() => setRecipeContent}
        modules={modules}
        theme="snow"
        style={{ height: "100%", width: "100%" }}
      />
    </S.QuillElement>
  );
});
