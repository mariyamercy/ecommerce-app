import { useLocation } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ThreeDView() {
  const location = useLocation();
  const property = location.state;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧊 3D Property Viewer</h1>

      {!property ? (
        <p>No property selected</p>
      ) : (
        <div style={styles.viewerBox}>
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                
                {/* IMAGE */}
                <TransformComponent>
                  <img
                    src={`http://localhost:8081${property.imageUrl}`}
                    alt="3D View"
                    style={styles.image}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    padding: "20px",
    background: "#0a0f2c",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
    color: "#4da3ff",
  },

  viewerBox: {
    width: "90%",
    height: "70vh",
    margin: "auto",
    background: "#111827",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },

  image: {
    width: "600px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "grab",
  },

  controls: {
    position: "absolute",
    top: "10px",
    left: "10px",
    display: "flex",
    gap: "10px",
    zIndex: 10,
  },
};