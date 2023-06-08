import React, { FC } from 'react'

interface versusProps {
  colorPicked: string;
  machineColor: string;
  playerScore?: number;
  machineScore?: number;
}

const Versus: FC<versusProps> = ({ colorPicked, machineColor, playerScore, machineScore }) => {




  return (
    <div className="col s12">
      <table className="scores">
        <tbody>
          <tr>
            <th>You</th>
            <th rowSpan={2} className='centered bloq large purple-text'>V.S.
            </th>
            <th>A.I.</th>
          </tr>
          <tr>
            <td colSpan={1} className="color" style={{ "--color": colorPicked } as React.CSSProperties}>
              <span className="bloq square" title={playerScore || playerScore === 0 ? `${playerScore}` : ""}></span>
            </td>
            <td colSpan={1} className="color" style={{ "--color": machineColor } as React.CSSProperties}>
              <span className="bloq square" title={machineScore || machineScore === 0 ? `${machineScore}` : ""}></span>
            </td>
          </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Versus