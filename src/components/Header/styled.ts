import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 120px;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
  background-color: white;

  z-index: 999;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 5rem;
  width: 50%;
`;

export const SearchInput = styled.input`
  width: 25rem;
  height: 2rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 1px solid gray;
`;

export const SearchButton = styled.button`
  cursor: pointer;
`;

export const TooltipText = styled.span`
  display: none;
  margin-left: 1.8rem;
  position: absolute;
  max-width: 200px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  font-size: 0.8em;
  background-color: black;
  color: white;
  border: none;
`;

export const RecipeTooltip = styled.span`
  display: inline-block;
`;

export const WriteRecipeButton = styled.button`
  margin-left: 3rem;
  margin-top: 0.3rem;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &&:hover {
    ${TooltipText} {
      display: block;
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  margin-top: 120px;
  background-color: #f8aa45;
`;

export const Category = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  width: 13%;
  height: 100%;
  text-align: center;
  font-weight: bold;
  text-decoration: none;

  &&:hover {
    background-color: #c68837;
    transition: 0.3s;
  }
`;
