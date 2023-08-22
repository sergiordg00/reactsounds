import EmptyVault from "./components/EmptyVault";

export default function MusicVault({ data }) {
  if(data.length === 0) {
    return (
      <EmptyVault/>
    );
  } else {
    return (
      <div className="">
        Aqui un .map de VaultItem component. first we will do the player logic.
      </div>
    );
  }
}