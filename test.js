function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function binarySearchTree() {
    // root element initial
    let root = null;

    function insertNode(root, newNode) {
        console.log(root, newNode)
        if (root.val < newNode.val) {
            if (root.right === null) {
                root.right = newNode
            } else {
                insertNode(root.right, newNode)
            }
        } else {
            if (root.left === null) {
                root.left = newNode
            } else {
                insertNode(root.left, newNode)
            }
        }
    }

    this.insert = function (val) {
        let newNode = new Node(val);
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }


    this.preOrder = function () {
        if (root !== null) {
            return;
        }
        // console.log(root.val);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}


let newNode = new Node(1);
let tree = new binarySearchTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
// console.log(newNode)
console.log(tree.preOrder(), newNode)