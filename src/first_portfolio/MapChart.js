import { ComposableMap, Geographies, Geography ,Annotation} from "react-simple-maps";
export const MapChart = () => (
  <div>
    <ComposableMap>
      <Geographies geography="/features.json" fill="whitesmoke" stroke="whitesmoke" strokeWidth={.5}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[30, 28]}
        dx={80}
        dy={80}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="30" y='15' fontSize='20px' textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Egypt"}
        </text>
      </Annotation>
    </ComposableMap>
  </div>
);
 