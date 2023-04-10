
export const FrontendRadarData = {
  labels: ["HTML", "CSS", "React", "Vue", "JS", "TS"],
  datasets: [
    {
      label: "Frontend",
      backgroundColor: "rgba(34, 202, 236, .2)",
      borderColor: "rgba(34, 202, 236, 1)",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      data: [4, 2, 4, 3, 4, 3]
    }
  ]
};



export const FrontendRadarOptions = {
  scale: {
    r: {
      suggestedMin: 1,
      suggestedMax: 5
    },
    ticks: {
      min: 1,
      max: 5,
      stepSize: 1,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: false
    }
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      pointRadius: 2
    }
  }
};



export const BackendRadarData = {
  labels: ["Python", "Flack", "Rails", "Node.js", "MySQL"],
  datasets: [
    {
      label: "Backend",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      data: [4, 3, 4, 2, 2]
    }
  ]
};



export const BackendRadarOptions = {
  scale: {
    r: {
      suggestedMin: 1,
      suggestedMax: 5
    },
    ticks: {
      min: 1,
      max: 5,
      stepSize: 1,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: false
    }
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      pointRadius: 2
    }
  }
};


export const DevOpsRadarData = {
  labels: ["Git/GitHub", "Linux", "docker", "docker compose", "VSCode", "SlackBot"],
  datasets: [
    {
      label: "DevOps",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      pointBackgroundColor: "rgba(255, 159, 64, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 159, 64, 1)",
      data: [4, 4, 3, 3, 4, 2]
    }
  ]
};



export const DevOpsRadarOptions = {
  scale: {
    r: {
      suggestedMin: 1,
      suggestedMax: 5
    },
    ticks: {
      min: 1,
      max: 5,
      stepSize: 1,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: false
    }
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      pointRadius: 2
    }
  }
};