import React from "react";
import { memo, useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import * as S from "./styled";
import ReactQuill from "react-quill";

interface QuillProps {
  recipeContent: string;
  setRecipeContent: (recipeContent: string) => void;
  quillRef: React.RefObject<ReactQuill>;
  // forwardRef: React.LegacyRef<ReactQuill>;
}

export const Quill = ({ quillRef, recipeContent, setRecipeContent }: QuillProps) => {
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
        // ref={quillRef}
        value={recipeContent}
        onChange={(v: string) => setRecipeContent(v)}
        modules={modules}
        theme="snow"
        style={{ height: "100%", width: "100%" }}
      />
    </S.QuillElement>
  );
};
