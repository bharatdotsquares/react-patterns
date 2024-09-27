import React from 'react';
import PropTypes from "prop-types";
import Heading from "../../common/Heading";

const TreeNode = ({ node }) => {
    console.log(node);
    return (
        <li>
            {node.label}
            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

TreeNode.propTypes = {
    node: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                label: PropTypes.string.isRequired,
                children: PropTypes.array // Can be an array of objects or empty
            })
        ).isRequired,
    }).isRequired,
};

const Tree = ({ data }) => {
    return (
        <div className="p-2 m-2 border">
            <Heading cls="text-center">Recursive Pattern</Heading>
            <ul>
                {data.map(node => (
                    <TreeNode key={node.id} node={node} />
                ))}
            </ul>
        </div>
    );
};

Tree.propTypes = {
    data: PropTypes.arrayOf( // Updated to reflect the correct prop
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            children: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    label: PropTypes.string.isRequired,
                    children: PropTypes.array // Optional: can be empty
                })
            ).isRequired,
        })
    ).isRequired,
};

export default Tree;
