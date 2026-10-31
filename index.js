class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    bfs() {
        if(this.root == null) {
            return [];
        }

        const result = [];
        const queue = [this.root];
        let index = 0;

        while(index < queue.length) {
            const node = queue[index++];
            result.push(node.value);

            if(node.left != null) {
                queue.push(node.left);
            }

            if(node.right != null) {
                queue.push(node.right);
            }
        }

        return result;
    }

    dfsPreorder() {
        if(this.root == null) {
            return [];
        }

        const result = [];
        const stack = [this.root];

        while(stack.length > 0) {
            const node = stack.pop();
            result.push(node.value);

            if(node.right != null) {
                stack.push(node.right);
            }

            if(node.left != null) {
                stack.push(node.left);
            }
        }

        return result;
    }

    dfsInorder() {
        const result = [];
        const stack = [];
        let current = this.root;

        while(current != null || stack.length > 0) {
            while(current != null) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            result.push(current.value);

            current = current.right;
        }

        return result;
    }

    dfsPostorder() {
        if(this.root == null) {
            return [];
        }

        const result = [];
        const stack = [{ node: this.root, visited: false }];

        while(stack.length > 0) {
            const { node, visited } = stack.pop();

            if(visited) {
                result.push(node.value);
                continue;
            }

            stack.push({ node: node, visited: true });

            if(node.right != null) {
                stack.push({ node: node.right, visited: false });
            }

            if(node.left != null) {
                stack.push({ node: node.left, visited: false });
            }
        }

        return result;
    }
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);

root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(11);

root.right.left.left = new TreeNode(12);
root.right.left.right = new TreeNode(13);

root.right.right.left = new TreeNode(14);
root.right.right.right = new TreeNode(15);

const tree = new Tree(root);

console.log(`BFS: ${tree.bfs()}`);
console.log(`DFS Preorder: ${tree.dfsPreorder()}`);
console.log(`DFS Inorder: ${tree.dfsInorder()}`);
console.log(`DFS Postorder: ${tree.dfsPostorder()}`);
