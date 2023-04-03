import react from "next";
import MaterialItem from "../MaterialItem";

import * as S from "./styled";

interface MaterialListProps {
  materials: any;
  onRemoveMaterial: (id: number) => void;
  onChangeSelectedMaterial: (material: any) => void;
  onEditToggle: () => void;
}

const MaterialList = ({
  materials,
  onRemoveMaterial,
  onChangeSelectedMaterial,
  onEditToggle,
}: MaterialListProps) => (
  <S.MaterialList>
    {materials.map((material: any) => (
      <MaterialItem
        material={material}
        key={material.id}
        onEditToggle={onEditToggle}
        onRemoveMaterial={onRemoveMaterial}
        onChangeSelectedMaterial={onChangeSelectedMaterial}
      />
    ))}
  </S.MaterialList>
);

export default MaterialList;
