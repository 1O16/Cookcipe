import react from "next";
import MaterialItem from "../MaterialItem";

import * as S from "./styled";

interface MaterialListProps {
  materials: any;
  onRemoveMaterial: (id: number) => void;
}

const MaterialList = ({ materials, onRemoveMaterial }: MaterialListProps) => (
  <S.MaterialList>
    {materials.map((material: any) => (
      <MaterialItem material={material} key={material.id} onRemoveMaterial={onRemoveMaterial} />
    ))}
  </S.MaterialList>
);

export default MaterialList;
