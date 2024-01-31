import Skills from '../data/skills.json';
import Circumstances from '../data/circumstances.json';
import React, { Component } from 'react';

export default class DiceRoller extends Component {
    constructor(props: any) {
        super(props);
        this.state = { selectedSkill: Skills[0].name };
    }

    render() {
        return (
            <div>
                <h1>Dice Roller</h1>
                <div>
                    <label htmlFor="skill-options">Skill: </label>
                    <select id="skill-options">{
                        Skills.map(skill =>
                            <option key={skill.name}>{skill.name}</option>)
                    }
                    </select>
                </div>
                <table>{
                    Circumstances.map(circumstance =>
                        <tr>
                            <td>{circumstance.name}</td>
                            <td>{circumstance.effect}</td>
                        </tr>)
                }
                </table>
            </div>
        );
    }
}