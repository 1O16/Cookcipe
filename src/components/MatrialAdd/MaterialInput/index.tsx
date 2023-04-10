import { useCallback, useState } from "react";

import * as S from "./styled";

interface MaterialInputProps {
  onWriteMaterial: (text: string) => void;
  materials?: any;
}

const MaterialInput = ({ materials, onWriteMaterial, ...props }: MaterialInputProps) => {
  const [value, setValue] = useState("");
  3;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onWriteMaterial(value);
      setValue("");
      e.preventDefault();
    },
    [onWriteMaterial, value]
  );
  return (
    <S.MaterialForm onSubmit={onSubmit}>
      <S.MaterialInput
        placeholder="재료를 입력해주세요. 예) 돼지고기 500g / 소금 3큰술"
        onChange={onChange}
        value={value}
      />
      <S.MaterialAddButton type="submit">추가</S.MaterialAddButton>
    </S.MaterialForm>
  );
};

export default MaterialInput;
