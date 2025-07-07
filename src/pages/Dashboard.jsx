const Dashboard = () => {
  return [
     <div>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm mb-4">
            <h5>Total Users</h5>
            <p>1,200</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm mb-4">
            <h5>Projects</h5>
            <p>35 Active</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm mb-4">
            <h5>Messages</h5>
            <p>12 New</p>
          </div>
        </div>
      </div>

      <div className="card p-4 mt-4">
        <h4>Recent Activity</h4>
        <ul>
          <li>User John created a project</li>
          <li>Settings updated</li>
          <li>Help ticket resolved</li>
        </ul>
      </div>
    </div>
  ]
};

export default Dashboard;
