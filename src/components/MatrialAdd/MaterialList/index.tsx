import MaterialItem from "../MaterialItem";

import * as S from "./styled";

interface MaterialListProps {
  materials: any;
  editToggle: boolean;
  onRemoveMaterial: (id: number) => void;
  onChangeSelectedMaterial: (material: any) => void;
  onEditToggle: () => void;
}

const MaterialList = ({
  materials,
  editToggle,
  onRemoveMaterial,
  onChangeSelectedMaterial,
  onEditToggle,
}: MaterialListProps) => (
  <S.MaterialList>
    {materials.map((material: any) => (
      <MaterialItem
        material={material}
        key={material.id}
        editToggle={editToggle}
        onEditToggle={onEditToggle}
        onRemoveMaterial={onRemoveMaterial}
        onChangeSelectedMaterial={onChangeSelectedMaterial}
      />
    ))}
  </S.MaterialList>
);

export default MaterialList;
