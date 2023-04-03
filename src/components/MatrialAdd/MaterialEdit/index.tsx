import react from "next";
import { useCallback, useEffect, useState } from "react";

import * as S from "./styled";

interface MaterialEditProps {
  selectedMaterial?: any;
  onUpdateMaterial: (id: number, text: string) => void;
}

const MaterialEdit = ({ selectedMaterial, onUpdateMaterial }: MaterialEditProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onUpdateMaterial(selectedMaterial.id, value);
      setValue("");
      e.preventDefault();
    },
    [onUpdateMaterial, value]
  );

  useEffect(() => {
    if (selectedMaterial) {
      setValue(selectedMaterial.text);
    }
  }, [selectedMaterial]);
  return (
    <S.MaterialEdit>
      <S.MaterialEditForm onSubmit={onSubmit}>
        <S.MaterialEditTitle>수정하기</S.MaterialEditTitle>
        <S.MaterialEditInput
          value={value}
          onChange={onChange}
          placeholder="재료를 입력해주세요. 예) 돼지고기 500g / 소금 3큰술"
        />
        <S.MaterialEditButton type="submit">수정</S.MaterialEditButton>
      </S.MaterialEditForm>
    </S.MaterialEdit>
  );
};

export default MaterialEdit;
