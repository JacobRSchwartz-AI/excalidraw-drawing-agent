import { Button } from "../Button";
import { share } from "../icons";

import clsx from "clsx";

import { useUIAppState } from "../../context/ui-appState";
import "./CopilotTrigger.scss";

const CopilotTrigger = ({
  onSelect,
  ...rest
}: {
  onSelect: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const appState = useUIAppState();

  const showIconOnly = appState.width < 830;

  return (
    <Button
      {...rest}
      className={clsx("collab-button")}
      type="button"
      onSelect={onSelect}
      style={{ position: "relative", width: showIconOnly ? undefined : "auto" }}
      title={"Shape Assistant"}
      // title={t("labels.CopilotTrigger")}
    >
      {/* {showIconOnly ? share : t("labels.share")} */}
      {showIconOnly ? share : "Shape Assistant"}
      {appState.collaborators.size > 0 && (
        <div className="CollabButton-collaborators">
          {appState.collaborators.size}
        </div>
      )}
    </Button>
  );
};

export default CopilotTrigger;
CopilotTrigger.displayName = "CopilotTrigger";
