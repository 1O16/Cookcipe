import react from "next";

import * as S from "./styled";

interface MaterialItemProps {
  material?: any;
  onRemoveMaterial: (id: number) => void;
  onChangeSelectedMaterial: (material: any) => void;
  onEditToggle: () => void;
}

const MaterialItem = ({
  material,
  onRemoveMaterial,
  onChangeSelectedMaterial,
  onEditToggle,
}: MaterialItemProps) => {
  const { id, text } = material;
  return (
    <S.MaterialItem>
      <S.MaterialText>{text}</S.MaterialText>
      <S.MaterialEdit
        onClick={() => {
          onChangeSelectedMaterial(material);
          onEditToggle();
        }}
      >
        E
      </S.MaterialEdit>
      <S.MaterialDelete onClick={() => onRemoveMaterial(id)}>X</S.MaterialDelete>
    </S.MaterialItem>
  );
};

export default MaterialItem;
